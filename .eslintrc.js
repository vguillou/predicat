module.exports = {
  root: true,
  plugins: ['prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  env: {
    browser: true,
    node: true,
  },
  // ESLint will parse the code via TypeScript
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: "tsconfig.json"
  },
  rules: {
    // Code formatting rules. See https://prettier.io/docs/en/options.html
    'prettier/prettier': [
      'warn',
      {
        semi: false,
        tabWidth: 2,
        arrowParens: 'always',
        printWidth: 100,
        singleQuote: true,
      },
    ],

    // Custom ESlint rules. See https://eslint.org/docs/rules/
    'no-param-reassign': [2, { props: true }],
    'no-console': 1,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-explicit-any': 0,
  },
}
