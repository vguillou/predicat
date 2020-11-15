import {
  always,
  ok,
  never,
  nok,
  isTruthy,
  isFalsy,
  not,
  isTrue,
  isFalse,
} from '@src/simple-predicates'
import * as datasetDictionary from '@tests/dataset'
import { datasetBasedTest } from '@tests/dataset/utils'

const datasets = Object.values(datasetDictionary)

const testAlways = (testSuiteName: string, functionToTest: typeof always): void => {
  describe(testSuiteName, () => {
    it('should return true', () => expect(functionToTest()).toBe(true))
  })
}
testAlways('always', always)
testAlways('ok', ok)

const testNever = (testSuiteName: string, functionToTest: typeof never): void => {
  describe(testSuiteName, () => {
    it('should return false', () => expect(functionToTest()).toBe(false))
  })
}
testNever('never', never)
testNever('nok', nok)

datasetBasedTest('isTruthy', isTruthy, datasets, (data) => data.isTruthy)

const testIsFalsy = (testSuiteName: string, functionToTest: typeof isFalsy) =>
  datasetBasedTest(testSuiteName, functionToTest, datasets, (data) => data.isFalsy)
testIsFalsy('isFalsy', isFalsy)
testIsFalsy('not', not)

datasetBasedTest('isTrue', isTrue, datasets, (data) => data.isTrue)

datasetBasedTest('isFalse', isFalse, datasets, (data) => data.isFalse)
