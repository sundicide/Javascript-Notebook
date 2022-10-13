import { expectEqualTest, LOG } from "../utils";

test("prob 1", () => {
  function solution(a, b) {
    const aLength = a.length;
    const bLength = b.length;
    let result = [];
    let p1 = 0;
    let p2 = 0;
    while (p1 < aLength && p2 < bLength) {
      if (a[p1] < b[p2]) {
        result.push(a[p1++]);
      } else {
        result.push(b[p2++]);
      }
    }
    while (p1 < aLength) result.push(a[p1++]);
    while (p2 < bLength) result.push(b[p2++]);

    return result;
  }
  const result = solution([1, 3, 5], [2, 3, 6, 7, 9]);
  expectEqualTest(result, [1, 2, 3, 3, 5, 6, 7, 9]);
});

// 공통원소 구하기
test("problem 2", () => {
  function solution(paramArr1, paramArr2) {
    const result = [];

    function sortFunc(a, b) {
      return a - b;
    }

    const arr1 = paramArr1;
    arr1.sort(sortFunc);

    const arr2 = paramArr2;
    arr2.sort(sortFunc);

    const arr1Length = arr1.length;
    const arr2Length = arr2.length;
    let p1 = 0,
      p2 = 0;

    while (p1 < arr1Length && p2 < arr2Length) {
      if (arr1[p1] === arr2[p2]) {
        result.push(arr1[p1]);
        p1 += 1;
        p2 += 1;
      } else if (arr1[p1] < arr2[p2]) {
        p1 += 1;
      } else {
        p2 += 1;
      }
    }

    return result;
  }
  const result = solution([1, 3, 9, 11, 5, 2], [11, 3, 2, 5, 7, 8]);
  expectEqualTest(result, [2, 3, 5, 11]);
});

// 연속 부분 수열
test("problem 3 ver1", () => {
  function solution(paramArr1, goal) {
    let result = 0;

    let lt = 0,
      rt = 1;

    let sum = paramArr1[lt];
    while (rt < paramArr1.length) {
      if (sum < goal) {
        sum += paramArr1[rt++];
      } else if (sum > goal) {
        sum -= paramArr1[lt++];
      } else {
        result++;
        sum -= paramArr1[lt++];
      }
    }

    return result;
  }
  const result = solution([1, 2, 1, 3, 1, 1, 1, 2], 6);
  expectEqualTest(result, 3);
});
test("problem 3 ver2", () => {
  function solution(paramArr1, goal) {
    let result = 0;

    let lt = 0;
    let sum = 0;

    for (let rt = 0; rt < paramArr1.length; rt++) {
      sum += paramArr1[rt];
      if (sum === goal) result++;
      while (sum >= goal) {
        sum -= paramArr1[lt++];
        if (sum === goal) result++;
      }
    }
    return result;
  }
  const result = solution([1, 2, 1, 3, 1, 1, 1, 2], 6);
  expectEqualTest(result, 3);
});

test("problem 4", () => {
  function solution(paramArr1, goal) {
    let result = 0;

    let lt = 0;
    let sum = 0;

    for (let rt = 0; rt < paramArr1.length; rt++) {}
    return result;
  }
  const result = solution([1, 2, 1, 3, 1, 1, 1, 2], 6);
  expectEqualTest(result, 3);
});
