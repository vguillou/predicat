import typescriptPlugin from 'rollup-plugin-typescript2';
import camelCase from 'lodash.camelcase'
import capitalize from 'lodash.capitalize'
import * as pkg from './package.json';

const configuration = (output) => ({
  input: 'src/index.ts',
  output,
  external: [],
  plugins: [
    typescriptPlugin({
      tsconfig: `tsconfig-packaging-${output.format}.json`,
      useTsconfigDeclarationDir: true,
    }),
  ],
});

export default [
  configuration({
    file: pkg.main,
    name: capitalize(camelCase(pkg.name)),
    format: 'umd',
    sourcemap: true,
  }),
  configuration({
    file: pkg.module,
    format: 'esm',
    sourcemap: true,
  }),
];
