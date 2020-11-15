import { Predicate } from './predicate'
import { isBoolean } from './type-guards'

/**
 * Combine predicates, verifying only if they all do.
 * @returns `true` if all given predicates also do, `false` otherwise.
 */
export function every<T>(...predicates: Array<boolean | Predicate<T>>): Predicate<T> {
  return (param: T) => (predicates ?? []).every((p) => (isBoolean(p) ? p : p(param)))
}
/**
 * Alias for `every`.
 * See {@link every}.
 */
export const allOf = every

/**
 * Combine predicates, verifying if one or more do.
 * @returns `true` if one or more given predicates also do, `false` otherwise.
 */
export function some<T>(...predicates: Array<boolean | Predicate<T>>): Predicate<T> {
  return (param: T) => (predicates ?? []).some((p) => (isBoolean(p) ? p : p(param)))
}
/**
 * Alias for `some`.
 * See {@link some}.
 */
export const oneOf = some
