# Predicat <!-- omit in toc -->

> A cute library to create, combine, and enjoy common predicates. 🐱

[![Maintenance](https://img.shields.io/badge/maintained%3F-yes-blue?style=flat-square)](https://github.com/vguillou/predicat/graphs/commit-activity)
[![Latest docs](https://img.shields.io/badge/latest-docs-blue?style=flat-square)](https://vguillou.github.io/predicat/latest/)
[![License](https://img.shields.io/github/license/vguillou/predicat?color=blue&style=flat-square)](https://github.com/vguillou/predicat/blob/master/LICENSE)
[![Build status](https://img.shields.io/circleci/build/gh/vguillou/predicat/master?style=flat-square)](https://app.circleci.com/pipelines/github/vguillou/predicat)
[![Coverage](https://img.shields.io/codecov/c/gh/vguillou/predicat/master?style=flat-square)](https://codecov.io/gh/vguillou/predicat)
[![Npm version](https://img.shields.io/npm/v/predicat?color=orange&style=flat-square)](https://www.npmjs.com/package/predicat)
[![Npm Downloads](https://img.shields.io/npm/dw/predicat?color=orange&style=flat-square)](https://www.npmjs.com/package/predicat)

- [Installation](#installation)
- [Usage](#usage)
  - [Available Predicates and Type-Guards](#available-predicates-and-type-guards)
  - [Create your own predicate](#create-your-own-predicate)
  - [Combine predicates](#combine-predicates)
- [License](#license)
- [Contribute](#contribute)
  - [Todo](#todo)
  - [Tag and publish](#tag-and-publish)

## Installation

Using NPM

```bash
$ npm install predicat
```

Or Yarn

```bash
$ yarn add predicat
```

## Usage

### Available Predicates and Type-Guards
[See the detailed documentation here.](https://vguillou.github.io/predicat/latest/)

### Create your own predicate
```js
// In JavaScript
const hasStock = ({ stock }) => stock > 0;

// In TypeScript
const hasStock = ({ stock }: { stock: number }): boolean => stock > 0;

// In TypeScript, you may use the Predicate type for better readability
import { Predicate } from 'predicat';

const hasStock: Predicate<{ stock: number }> = ({ stock }) => stock > 0;
```

### Combine predicates
```js
import { allOf, isNill, not, some } from 'predicat';

const hasStock: Predicate<{ stock: number }> = ({ stock }) => stock > 0;
const myCombinedPredicate: Predicate<{ stock: number }> = allOf(
  not(isNill),
  hasStock,
);

myCombinedPredicate(undefined);     // false
myCombinedPredicate(null);          // false
myCombinedPredicate({});            // false
myCombinedPredicate({ stock: 0 });  // false
myCombinedPredicate({ stock: 42 }); // true

// You can also use booleans with combination operators every/allOf and some/oneOf
const myOtherCombinedPredicate: Predicate<void> = some(
  false,
  () => myGlobalVar < 100,
);
```

## License

[Predicat is public domain software. See LICENSE for more details.](https://github.com/vguillou/predicat/blob/master/LICENSE)

## Contribute

Please submit a Pull Request! 😺

### Todo
- Generate Github and Npm changelog from PR names
- Publish changelogs to Slack channel ?
- Commit format ?

### Tag and publish

```bash
# Merge in master
$ git checkout master && git pull
$ yarn version [--patch|--minor|--major] # Updates package.json and creates an annotated git tag
$ git push origin master --tags
# CircleCI will test, build, then publish the new version to NPM and deploy the documentation to the 'gh-pages' branch
```
