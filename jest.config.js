const { pathsToModuleNameMapper } = require('ts-jest/utils')
const { compilerOptions } = require('./tsconfig')

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
  modulePathIgnorePatterns: ['<rootDir>/lib/', '<rootDir>/dist/'],
  testRegex: '/__tests__/.*.test.ts$',
  collectCoverage: true,
  coverageDirectory: '<rootDir>/reports/coverage',
}
