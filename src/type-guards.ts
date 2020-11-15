/**
 * Check if the `subject` is a `boolean` (can be used as a type guard).
 * @param subject the variable to check.
 * @returns `true` the given parameter is a `boolean`, `false` otherwise.
 */
export function isBoolean(subject: unknown): subject is boolean {
  return typeof subject === 'boolean'
}

/**
 * Check if the `subject` is a `string` (can be used as a type guard).
 * @param subject the variable to check.
 * @returns `true` the given parameter is a `string`, `false` otherwise.
 */
export function isString(subject: unknown): subject is string {
  return typeof subject === 'string'
}

/**
 * Check if the `subject` is a `number` (can be used as a type guard).
 * @param subject the variable to check.
 * @returns `true` the given parameter is a `number`, `false` otherwise.
 */
export function isNumber(subject: unknown): subject is number {
  return typeof subject === 'number'
}

/**
 * Check if the `subject` is an `array` (can be used as a type guard).
 * @param subject the variable to check.
 * @returns `true` the given parameter is an `array`, `false` otherwise.
 */
export function isArray(subject: unknown): subject is any[] {
  return Array.isArray(subject)
}

/**
 * Check if the `subject` is a `set` (can be used as a type guard).
 * @param subject the variable to check.
 * @returns `true` the given parameter is a `set`, `false` otherwise.
 */
export function isSet(subject: unknown): subject is Set<any> {
  return subject instanceof Set
}

/**
 * Check if the `subject` is a `map` (can be used as a type guard).
 * @param subject the variable to check.
 * @returns `true` the given parameter is a `map`, `false` otherwise.
 */
export function isMap(subject: unknown): subject is Map<any, any> {
  return subject instanceof Map
}

/**
 * Check if the `subject` is `undefined` (can be used as a type guard).
 * @param subject the variable to check.
 * @returns `true` the given parameter is `undefined`, `false` otherwise.
 */
export function isUndefined(subject: unknown): subject is undefined {
  return subject === undefined
}

/**
 * Check if the `subject` is `null` (can be used as a type guard).
 * @param subject the variable to check.
 * @returns `true` the given parameter is `null`, `false` otherwise.
 */
export function isNull(subject: unknown): subject is null {
  return subject === null
}

/**
 * Check if the `subject` is `undefined` or `null`.
 * @param subject the variable to check.
 * @returns `true` the given parameter is `undefined` or `null`, `false` otherwise.
 */
export function isNill(subject: unknown) {
  return isUndefined(subject) || isNull(subject)
}
