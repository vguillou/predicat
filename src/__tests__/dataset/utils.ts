import { Predicate } from '@src/predicate'

export type DataSet<T> = DataValue<T> & DataFlags

export type DataValue<T> = {
  value: T
}

export type DataFlags = {
  isTruthy: boolean
  isTrue: boolean
  isFalsy: boolean
  isFalse: boolean
}

export const dataSetFactory = <T>(value: T, flags: Partial<DataFlags> = {}): DataSet<T> => ({
  value,
  isTruthy: false,
  isTrue: false,
  isFalsy: false,
  isFalse: false,
  ...flags,
})

export const datasetBasedTest = <F extends Predicate<any>>(
  testSuiteName: string,
  functionToTest: F,
  datasets: DataSet<any>[],
  subjectGetter: (dataset: DataSet<any>) => any
): void => {
  const testData = Object.values(datasets).map((dataset) => [subjectGetter(dataset), dataset.value])
  describe(testSuiteName, () => {
    it.each(testData)('should return %p when called with %p', (expected, subject) => {
      expect(functionToTest(subject)).toBe(expected)
    })
  })
}
