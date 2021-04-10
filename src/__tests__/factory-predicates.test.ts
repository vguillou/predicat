import { every, allOf, some, oneOf } from '@src/factory-predicates'
import { always, never, not } from '@src/simple-predicates'

const testEvery = (fn: typeof every, fnName: string): void => {
  describe(fnName, () => {
    it.each`
      predicates                  | subject      | expected | description
      ${[]}                       | ${undefined} | ${true}  | ${'no parameter'}
      ${[always]}                 | ${undefined} | ${true}  | ${'1 verifying predicate'}
      ${[always, always, always]} | ${undefined} | ${true}  | ${'3 verifying predicates'}
      ${[true]}                   | ${undefined} | ${true}  | ${'true'}
      ${[true, true]}             | ${undefined} | ${true}  | ${'2 true'}
      ${[not, always, true]}      | ${false}     | ${true}  | ${'2 verifying predicates and true'}
      ${[never]}                  | ${undefined} | ${false} | ${'1 not verifying predicate'}
      ${[never, never, never]}    | ${undefined} | ${false} | ${'3 not verifying predicates'}
      ${[false]}                  | ${undefined} | ${false} | ${'false'}
      ${[false, false]}           | ${undefined} | ${false} | ${'2 false'}
      ${[not, never, false]}      | ${true}      | ${false} | ${'2 not verifying predicates and false'}
      ${[not, never]}             | ${false}     | ${false} | ${'1 verifying predicate and 1 not'}
      ${[always, false]}          | ${undefined} | ${false} | ${'1 verifying predicate and false'}
      ${[not, true]}              | ${true}      | ${false} | ${'1 not verifying predicate and true'}
      ${[true, false]}            | ${undefined} | ${false} | ${'true and false'}
    `(
      'should create a predicate that returns $expected when called with $description',
      ({ predicates, subject, expected }) => {
        const result = fn(...predicates)
        expect(result(subject)).toBe(expected)
      },
    )
  })
}
testEvery(every, 'every')
testEvery(allOf, 'allOf')

const testSome = (fn: typeof every, fnName: string): void => {
  describe(fnName, () => {
    it.each`
      predicates                  | subject      | expected | description
      ${[]}                       | ${undefined} | ${false} | ${'no parameter'}
      ${[always]}                 | ${undefined} | ${true}  | ${'1 verifying predicate'}
      ${[always, always, always]} | ${undefined} | ${true}  | ${'3 verifying predicates'}
      ${[true]}                   | ${undefined} | ${true}  | ${'true'}
      ${[true, true]}             | ${undefined} | ${true}  | ${'2 true'}
      ${[not, always, true]}      | ${false}     | ${true}  | ${'2 verifying predicates and true'}
      ${[never]}                  | ${undefined} | ${false} | ${'1 not verifying predicate'}
      ${[never, never, never]}    | ${undefined} | ${false} | ${'3 not verifying predicates'}
      ${[false]}                  | ${undefined} | ${false} | ${'false'}
      ${[false, false]}           | ${undefined} | ${false} | ${'2 false'}
      ${[not, never, false]}      | ${true}      | ${false} | ${'2 not verifying predicates and false'}
      ${[not, never]}             | ${false}     | ${true}  | ${'1 verifying predicate and 1 not'}
      ${[always, false]}          | ${undefined} | ${true}  | ${'1 verifying predicate and false'}
      ${[not, true]}              | ${true}      | ${true}  | ${'1 not verifying predicate and true'}
      ${[true, false]}            | ${undefined} | ${true}  | ${'true and false'}
    `(
      'should create a predicate that returns $expected when called with $description',
      ({ predicates, subject, expected }) => {
        const result = fn(...predicates)
        expect(result(subject)).toBe(expected)
      },
    )
  })
}
testSome(some, 'some')
testSome(oneOf, 'oneOf')
