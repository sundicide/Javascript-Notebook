// https://leetcode.com/problems/merge-sorted-array/

import { LOG, expectEqualTest } from '../utils';

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  if (nums1.length !== m) {
    while (nums1.length !== m) {
      nums1.pop();
    }
  }
  if (nums2.length !== n) {
    while (nums2.length !== n) {
      nums2.pop();
    }
  }

  let sortedArr = [...nums1, ...nums2].sort((a, b) => a - b);

  const firstNegativeNumberIdx = sortedArr.findIndex((d) => d < 0);

  if (firstNegativeNumberIdx === -1) {
    sortedArr.forEach((d, idx) => {
      nums1[idx] = d;
    });
  } else {
    sortedArr.forEach((d, idx) => {
      nums1[idx] = d;
    });
  }
  return nums1;
};

describe('test', () => {
  test('case 1', () => {
    const nums1 = [1, 2, 3, 0, 0, 0];
    const m = 3;
    const nums2 = [2, 5, 6];
    const n = 3;

    const expectedResult = [1, 2, 2, 3, 5, 6];
    merge(nums1, m, nums2, n);
    expectEqualTest(nums1, expectedResult);
  });

  test('case 2', () => {
    const nums1 = [1];
    const m = 1;
    const nums2 = [];
    const n = 0;

    const expectedResult = [1];
    merge(nums1, m, nums2, n);
    expectEqualTest(nums1, expectedResult);
  });

  test('case 3', () => {
    const nums1 = [0];
    const m = 0;
    const nums2 = [1];
    const n = 1;

    const expectedResult = [1];
    merge(nums1, m, nums2, n);
    expectEqualTest(nums1, expectedResult);
  });

  test('submission failed case 1', () => {
    const nums1 = [-1, 0, 0, 3, 3, 3, 0, 0, 0];
    const m = 6;
    const nums2 = [1, 2, 2];
    const n = 3;

    const expectedResult = [-1, 0, 0, 1, 2, 2, 3, 3, 3];
    merge(nums1, m, nums2, n);
    expectEqualTest(nums1, expectedResult);
  });

  test('submission failed case 2', () => {
    const nums1 = [-1, -1, 0, 0, 0, 0];
    const m = 4;
    const nums2 = [-1, 0];
    const n = 2;

    const expectedResult = [-1, -1, -1, 0, 0, 0];
    merge(nums1, m, nums2, n);

    expectEqualTest(nums1, expectedResult);
  });
});
