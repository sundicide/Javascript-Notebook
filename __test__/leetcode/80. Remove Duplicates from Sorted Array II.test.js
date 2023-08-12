// https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/

import { LOG, expectEqualTest } from '../utils';

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  var target = nums;
  var map = new Map();

  const validNumArr = [];

  target.forEach((d, idx) => {
    if (!map.has(d)) {
      map.set(d, 1);
      validNumArr.push(idx);
    } else {
      const count = map.get(d);
      if (count < 2) {
        map.set(d, count + 1);
        validNumArr.push(idx);
      }
    }
  });

  const validNumLength = validNumArr.length;

  target.forEach((d, idx) => {
    if (validNumLength > idx) {
      target[idx] = target[validNumArr[idx]];
    } else {
      target[idx] = '_';
    }
  });
  return validNumLength;
};

describe('test', () => {
  test('case 1', () => {
    const nums = [1, 1, 1, 2, 2, 3];

    const resultLength = removeDuplicates(nums);
    expectEqualTest(resultLength, 5);
    expectEqualTest(nums, [1, 1, 2, 2, 3, '_']);
  });

  test('case 2', () => {
    const nums = [0, 0, 1, 1, 1, 1, 2, 3, 3];

    const resultLength = removeDuplicates(nums);
    expectEqualTest(resultLength, 7);
    expectEqualTest(nums, [0, 0, 1, 1, 2, 3, 3, '_', '_']);
  });
});
