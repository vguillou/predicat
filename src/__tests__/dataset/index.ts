import { dataSetFactory } from './utils'

export const numberZero = dataSetFactory(0, { isFalsy: true, isNumber: true })
export const numberOne = dataSetFactory(1, { isTruthy: true, isNumber: true })
export const numberMinusOne = dataSetFactory(-1, { isTruthy: true, isNumber: true })
export const numberSample = dataSetFactory(42, { isTruthy: true, isNumber: true })

export const stringEmpty = dataSetFactory('', { isFalsy: true, isString: true })
export const stringWhiteSpace = dataSetFactory(' ', { isTruthy: true, isString: true })
export const stringWhiteSpaces = dataSetFactory('   ', { isTruthy: true, isString: true })
export const stringLineBreak = dataSetFactory('\n', { isTruthy: true, isString: true })

export const nullSample = dataSetFactory(null, { isFalsy: true, isNill: true, isNull: true })
export const undefinedSample = dataSetFactory(undefined, {
  isFalsy: true,
  isNill: true,
  isUndefined: true,
})
export const NaNSample = dataSetFactory(NaN, { isFalsy: true, isNumber: true })

export const booleanTrue = dataSetFactory(true, { isTruthy: true, isTrue: true, isBoolean: true })
export const booleanFalse = dataSetFactory(false, { isFalsy: true, isFalse: true, isBoolean: true })
// Weird behavior of Boolean, yes! See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
export const BooleanTrue = dataSetFactory(new Boolean(true), { isTruthy: true })
export const BooleanFalse = dataSetFactory(new Boolean(false), { isTruthy: true })

export const objectNoKey = dataSetFactory({}, { isTruthy: true })
export const objectSample = dataSetFactory({ key: 'hello world' }, { isTruthy: true })

export const mapNoKey = dataSetFactory(new Map(), { isTruthy: true, isMap: true })
export const mapSample = dataSetFactory(
  new Map([
    [1, 'one'],
    [2, 'two'],
  ]),
  { isTruthy: true, isMap: true }
)

export const arrayEmpty = dataSetFactory([], { isTruthy: true, isArray: true })
export const arraySample = dataSetFactory([1, 2], { isTruthy: true, isArray: true })

export const setEmpty = dataSetFactory(new Set(arrayEmpty.value), { isTruthy: true, isSet: true })
export const setSample = dataSetFactory(new Set(arraySample.value), { isTruthy: true, isSet: true })

export const regexpEmpty = dataSetFactory(new RegExp(''), { isTruthy: true })
export const regexpSample = dataSetFactory(/abc/, { isTruthy: true })
