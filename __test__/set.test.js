import { expectEqualTest, LOG } from './utils'

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

test('set test', () => {
  const mySet = new Set()

  mySet.add(1)

  expectEqualTest(mySet.delete(1), true)
  expectEqualTest(mySet.delete(2), false)

  mySet.add(3)
  mySet.add(3)

  expectEqualTest(mySet.size, 1)
  expectEqualTest(mySet.has(3), true)
})
