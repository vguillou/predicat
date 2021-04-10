import typescriptPlugin from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'
import camelCase from 'lodash.camelcase'
import capitalize from 'lodash.capitalize'
import * as pkg from './package.json'

const projectGlobalName = capitalize(camelCase(pkg.name))
const externals = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
  ...Object.keys(pkg.optionalDependencies || {}),
]
const externalPattern = new RegExp(`^(${externals.join('|')})($|/)`)
const externalPredicate = (moduleId) => {
  if (!externals.length) return false
  return externalPattern.test(moduleId)
}
const minifiedFile = (output) => {
  const lastDotIndex = output.lastIndexOf('.')
  return `${output.slice(0, lastDotIndex)}.min${output.slice(lastDotIndex)}`
}
const defaultCompress = {
  unsafe: true,
  unsafe_comps: true,
  unsafe_proto: true,
}
const noDeclarationTsconfigOverride = { compilerOptions: { declaration: false, declarationMap: false } }

const configurationBuilder = ({ output, compress = undefined, declaration = false }) => ({
  input: 'src/index.ts',
  output: { indent: false, sourcemap: false, ...output },
  external: externalPredicate,
  plugins: [
    typescriptPlugin({
      tsconfig: 'tsconfig-packaging.json',
      ...(declaration ? { useTsconfigDeclarationDir: true } : { tsconfigOverride: noDeclarationTsconfigOverride }),
    }),
    ...(compress ? [terser({ compress })] : []),
  ],
})

export default [
  // CommonJS
  configurationBuilder({
    output: {
      file: pkg.main,
      format: 'cjs',
      name: projectGlobalName,
      sourcemap: true,
    },
    declaration: true,
  }),

  // ESM
  configurationBuilder({
    output: {
      file: pkg.module,
      format: 'esm',
      sourcemap: true,
    },
  }),

  // UMD development
  configurationBuilder({
    output: {
      file: pkg.unpkg,
      format: 'umd',
      name: projectGlobalName,
      sourcemap: true,
    },
  }),

  // UMD production
  configurationBuilder({
    output: {
      file: minifiedFile(pkg.unpkg),
      format: 'umd',
      name: projectGlobalName,
      sourcemap: false,
    },
    compress: defaultCompress,
  }),
]
