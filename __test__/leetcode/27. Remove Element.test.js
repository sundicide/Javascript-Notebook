// https://leetcode.com/problems/remove-element

import { LOG, expectEqualTest } from '../utils';

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  const filtered = nums.filter((d) => d !== val);

  let filteredIdx = 0;
  nums.forEach((_, idx) => {
    if (idx >= filtered.length) {
      nums[idx] = '_';
    } else {
      nums[idx] = filtered[filteredIdx++];
    }
  });

  return filtered.length;
};

describe('test', () => {
  test('case 1', () => {
    const nums = [3, 2, 2, 3];
    const val = 3;

    const resultLength = removeElement(nums, val);
    expectEqualTest(resultLength, 2);
    expectEqualTest(nums, [2, 2, '_', '_']);
  });

  test('case 2', () => {
    const nums = [0, 1, 2, 2, 3, 0, 4, 2];
    const val = 2;

    const resultLength = removeElement(nums, val);
    expectEqualTest(resultLength, 5);
    expectEqualTest(nums, [0, 1, 3, 0, 4, '_', '_', '_']);
  });
});
