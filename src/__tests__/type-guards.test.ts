import {
  isArray,
  isBoolean,
  isMap,
  isNill,
  isNull,
  isNumber,
  isRegExp,
  isSet,
  isString,
  isUndefined,
} from '@src/type-guards'
import * as datasetDictionary from '@tests/dataset'
import { datasetBasedTest } from '@tests/dataset/utils'

const datasets = Object.values(datasetDictionary)

datasetBasedTest('isArray', isArray, datasets, (data) => data.isArray)

datasetBasedTest('isBoolean', isBoolean, datasets, (data) => data.isBoolean)

datasetBasedTest('isMap', isMap, datasets, (data) => data.isMap)

datasetBasedTest('isNill', isNill, datasets, (data) => data.isNill)

datasetBasedTest('isNull', isNull, datasets, (data) => data.isNull)

datasetBasedTest('isNumber', isNumber, datasets, (data) => data.isNumber)

datasetBasedTest('isRegExp', isRegExp, datasets, (data) => data.isRegExp)

datasetBasedTest('isSet', isSet, datasets, (data) => data.isSet)

datasetBasedTest('isString', isString, datasets, (data) => data.isString)

datasetBasedTest('isUndefined', isUndefined, datasets, (data) => data.isUndefined)
