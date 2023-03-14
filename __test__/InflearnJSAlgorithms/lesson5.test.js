import { expectEqualTest, LOG } from '../utils';

test('prob 1', () => {
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
test('problem 2', () => {
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
test('problem 3 ver1', () => {
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
test('problem 3 ver2', () => {
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

// 연속 부분 함수
test('problem 4 ver1', () => {
  function solution(paramArr1, goal) {
    let result = 0;
    let lt = 0;
    let sum = 0;

    for (let rt = 0; rt < paramArr1.length; rt++) {
      sum += paramArr1[rt];
      if (sum <= goal) {
        result += rt - lt + 1;
      } else {
        while (sum > goal) {
          sum -= paramArr1[lt++];
          if (sum <= goal) {
            result += rt - lt + 1;
          }
        }
      }
    }
    return result;
  }
  const result = solution([1, 3, 1, 2, 3], 5);
  expectEqualTest(result, 10);
});

test('problem 4 ver2', () => {
  function solution(paramArr1, goal) {
    let result = 0;
    let lt = 0;
    let sum = 0;

    for (let rt = 0; rt < paramArr1.length; rt++) {
      sum += paramArr1[rt];
      while (sum > goal) {
        sum -= paramArr1[lt++];
      }
      result += rt - lt + 1;
    }
    return result;
  }
  const result = solution([1, 3, 1, 2, 3], 5);
  expectEqualTest(result, 10);
});

// 최대 매출
test('problem 5', () => {
  function solution(paramArr1, nums) {
    const length = paramArr1.length;

    let sum = 0;
    for (let i = 0; i < nums; i++) {
      sum += paramArr1[i];
    }
    let maxValue = sum;
    for (let i = nums; i < length; i++) {
      sum = sum + paramArr1[i] - paramArr1[i - nums];
      maxValue = Math.max(maxValue, sum);
    }
    return maxValue;
  }
  const result = solution([12, 15, 11, 20, 25, 10, 20, 19, 13, 15], 3);
  expectEqualTest(result, 56);
});

// 학급 회장
test('problem 6 ver1', () => {
  function solution(arr) {
    const hash = arr.split('').reduce((accu, curr) => {
      if (!accu[curr]) {
        accu[curr] = 1;
      } else {
        accu[curr] = accu[curr] + 1;
      }
      return accu;
    }, {});
    let answer = '';
    let maxVal = Number.MIN_SAFE_INTEGER;
    Object.entries(hash).forEach(([key, val]) => {
      if (maxVal < val) {
        maxVal = val;
        answer = key;
      }
    });
    return answer;
  }
  const result = solution('BACBACCACCBDEDE');
  expectEqualTest(result, 'C');
});

// 학급 회장
test('problem 6 ver2', () => {
  function solution(str) {
    var resultMap = new Map();

    for (let x of str) {
      if (resultMap.has(x)) resultMap.set(x, resultMap.get(x) + 1);
      else resultMap.set(x, 1);
    }

    let answer = '';
    let maxVal = Number.MIN_SAFE_INTEGER;
    for (let [key, value] of resultMap) {
      if (value > maxVal) {
        maxVal = value;
        answer = key;
      }
    }
    return answer;
  }
  const result = solution('BACBACCACCBDEDE');
  expectEqualTest(result, 'C');
});

// 모든 아나그램 찾기
test('problem 8', () => {
  function solution(problemStr, targetStr) {
    const hashMap = new Map();

    for (let x of targetStr) {
      if (hashMap.has(x)) hashMap.set(x, hashMap.get(x) + 1);
      else hashMap.set(x, 1);
    }

    const k = targetStr.length;
    let result = 0;

    function isAnagram(sourceStr) {
      const tempTargetMap = new Map(hashMap);
      for (let x of sourceStr) {
        if (tempTargetMap.has(x) && tempTargetMap.get(x) > 0) {
          tempTargetMap.set(x, tempTargetMap.get(x) - 1);
        } else {
          return false;
        }
      }
      for (let [key, value] of tempTargetMap) {
        if (value !== 0) return false;
      }
      return true;
    }

    for (let i = k; i <= problemStr.length; i++) {
      const tempStr = problemStr.toLowerCase().slice(i - k, i);
      const anagramTestResult = isAnagram(tempStr);

      if (anagramTestResult) result++;
    }
    return result;
  }

  const result = solution('bacaAacba', 'abc');
  expectEqualTest(result, 3);
});
