import { Predicate } from './predicate'
import { isBoolean } from './type-guards'

/**
 * Combine predicates, verifying only if they all do.
 * @returns `true` if all given predicates also do, `false` otherwise.
 */
export const every = <T>(...predicates: Array<Predicate<T> | boolean>): Predicate<T> => (
  param?: T
) => (predicates ?? []).every((p) => (typeof p === 'boolean' ? p : p(param)))
/**
 * Alias for `every`.
 * See {@link every}.
 */
export const allOf = every

/**
 * Combine predicates, verifying if one or more do.
 * @returns `true` if one or more given predicates also do, `false` otherwise.
 */
export const some = <T>(...predicates: Array<Predicate<T> | boolean>): Predicate<T> => (
  param?: T
) => (predicates ?? []).some((p) => (isBoolean(p) ? p : p(param)))
/**
 * Alias for `some`.
 * See {@link some}.
 */
export const oneOf = some
