/**
 * A statement that may be true or false depending on the values of its variable.
 * @param param - The predicate's parameter
 * @returns A boolean result, making a statement about the given parameter.
 */
export type Predicate<T> = (param?: T) => boolean
