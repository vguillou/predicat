import { Predicate } from './predicate'

/**
 * A predicate that always verifies.
 * @returns `true`.
 */
export const always: Predicate<void> = () => true
/**
 * Alias for `always`.
 * See {@link always}.
 */
export const ok = always

/**
 * A predicate that never verifies.
 * @returns `false`.
 */
export const never: Predicate<void> = () => false
/**
 * Alias for `never`.
 * See {@link never}.
 */
export const nok = never

/**
 * A predicate that verifies if the `subject` is truthy.<br>
 * <b style="color: coral;">Will return <code>true</code> if the <code>subject</code> is <code>new Boolean(false)</code>.</b>
 * @param subject - the variable to check.
 * @returns `true` the `subject` is truthy, `false` otherwise.
 */
export const isTruthy: Predicate<any> = (subject) => !!subject

/**
 * A predicate that verifies if the `subject` is falsy.<br>
 * <b style="color: coral;">Will return <code>false</code> if the <code>subject</code> is <code>new Boolean(false)</code>.</b>
 * @param subject - the variable to check.
 * @returns `true` the `subject` is falsy, `false` otherwise.
 */
export const isFalsy: Predicate<any> = (subject) => !subject
/**
 * Alias for `isFalsy`.
 * See {@link isFalsy}.
 */
export const not = isFalsy

/**
 * A predicate that verifies if the `subject` is `true`.<br>
 * <b style="color: coral;">Will return <code>false</code> if the <code>subject</code> is <code>new Boolean(true)</code>.</b>
 * @param subject - the variable to check.
 * @returns `true` the `subject` is `true`, `false` otherwise.
 */
export const isTrue: Predicate<any> = (subject) => subject === true

/**
 * A predicate that verifies if the `subject` is `false`.<br>
 * <b style="color: coral;">Will return <code>false</code> if the <code>subject</code> is <code>new Boolean(false)</code>.</b>
 * @param subject - the variable to check.
 * @returns `true` the `subject` is `false`, `false` otherwise.
 */
export const isFalse: Predicate<any> = (subject) => subject === false
