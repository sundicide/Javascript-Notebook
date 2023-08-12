// https://leetcode.com/problems/rotate-array/

import { LOG, expectEqualTest } from '../utils';

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  let idxArr = new Array(nums.length).fill(0).map((d, idx) => idx);

  idxArr
    .map((idx) => {
      return [(idx + k) % nums.length, nums[idx]];
    })
    .forEach(([idx, value]) => {
      nums[idx] = value;
    });
};

describe('test', () => {
  test('case 1', () => {
    const nums = [1, 2, 3, 4, 5, 6, 7];
    const k = 3;

    rotate(nums, k);
    expectEqualTest(nums, [5, 6, 7, 1, 2, 3, 4]);
  });

  test('case 2', () => {
    const nums = [-1, -100, 3, 99];
    const k = 2;

    rotate(nums, k);
    expectEqualTest(nums, [3, 99, -1, -100]);
  });
});
