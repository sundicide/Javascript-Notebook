// https://leetcode.com/problems/majority-element

import { LOG, expectEqualTest } from '../utils';

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  var map = new Map();
  nums.forEach((d) => {
    if (map.has(d)) {
      map.set(d, map.get(d) + 1);
    } else {
      map.set(d, 1);
    }
  });

  const majority = Array.from(map).reduce(
    (accu, curr) => {
      const [aKey, aVal] = accu;
      const [cKey, cVal] = curr;
      if (cVal > Math.floor(nums.length / 2) && cVal > aVal) {
        return curr;
      } else {
        return accu;
      }
    },
    [-1, -1]
  );
  return majority[0];
};

describe('test', () => {
  test('case 1', () => {
    const nums = [3, 2, 3];

    const resultLength = majorityElement(nums);
    expectEqualTest(resultLength, 3);
  });

  test('case 2', () => {
    const nums = [2, 2, 1, 1, 1, 2, 2];

    const resultLength = majorityElement(nums);
    expectEqualTest(resultLength, 2);
  });
});
