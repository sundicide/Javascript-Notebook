// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

import { LOG, expectEqualTest } from '../utils';

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  var resultSet = new Set();

  nums.forEach((d) => {
    resultSet.add(d);
  });

  var resultArr = Array.from(resultSet).sort((a, b) => a - b);

  let resultArrIdx = 0;
  nums.forEach((d, idx) => {
    if (resultArr[idx] === undefined) {
      nums[idx] = '_';
    } else {
      nums[idx] = resultArr[resultArrIdx++];
    }
  });
  return resultArr.length;
};

describe('test', () => {
  test('case 1', () => {
    const nums = [1, 1, 2];

    const resultLength = removeDuplicates(nums);
    expectEqualTest(resultLength, 2);
    expectEqualTest(nums, [1, 2, '_']);
  });

  test('case 2', () => {
    const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

    const resultLength = removeDuplicates(nums);
    expectEqualTest(resultLength, 5);
    expectEqualTest(nums, [0, 1, 2, 3, 4, '_', '_', '_', '_', '_']);
  });
});
