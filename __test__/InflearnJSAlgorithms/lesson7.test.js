import { expectEqualTest, LOG } from "../utils";

// 선택 정렬
test("선택 정렬", () => {
  function solution(arr) {
    for (let i = 0; i < arr.length; i++) {
      let minIdx = i;
      for (let j = i; j < arr.length; j++) {
        if (arr[minIdx] > arr[j]) {
          minIdx = j;
        }
      }
      let temp = arr[i];
      arr[i] = arr[minIdx];
      arr[minIdx] = temp;
    }
    return arr;
  }
  expectEqualTest(solution([1, 3, 4, 2]), [1, 2, 3, 4]);
  expectEqualTest(solution([13, 5, 11, 7, 23, 15]), [5, 7, 11, 13, 15, 23]);
});

test("prob 1 desc", () => {
  function solution(arr) {
    for (let i = 0; i < arr.length; i++) {
      let min = arr[i];
      let minJ = i;
      for (let j = i; j < arr.length; j++) {
        if (min < arr[j]) {
          min = arr[j];
          minJ = j;
        }
      }
      let temp = arr[i];
      arr[i] = min;
      arr[minJ] = temp;
    }
    return arr;
  }
  expectEqualTest(solution([1, 3, 4, 2]), [4, 3, 2, 1]);
  expectEqualTest(solution([13, 5, 11, 7, 23, 15]), [23, 15, 13, 11, 7, 5]);
});

// 버블 정렬
test("prob 2", () => {
  function solution(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i; j < arr.length - i - 1; j++) {
        const first = arr[j];
        const second = arr[j + 1];
        if (second < first) {
          const temp = first;
          arr[j] = second;
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }
  const result = solution([1, 3, 4, 2]);
});

test("삽입 정렬", () => {
  function less(a, b) {
    return a < b;
  }
  function solution(a) {
    const result = [];
    for (let i = 1; i < a.length; i++) {
      for (let j = i; j > 0 && less(a[j], a[j - 1]); j--) {
        [a[j], a[j - 1]] = [a[j - 1], a[j]];
      }
    }
    return a;
  }
  expectEqualTest(solution([1, 3, 4, 2]), [1, 2, 3, 4]);
  expectEqualTest(solution([13, 5, 11, 7, 23, 15]), [5, 7, 11, 13, 15, 23]);
});

test("삽입 정렬 내림차순", () => {
  function big(a, b) {
    return a > b;
  }
  function solution(a) {
    for (let i = 1; i < a.length; i++) {
      for (let j = i; j > 0 && big(a[j], a[j - 1]); j--) {
        [a[j], a[j - 1]] = [a[j - 1], a[j]];
      }
    }
    return a;
  }
  expectEqualTest(solution([1, 3, 4, 2]), [4, 3, 2, 1]);
  expectEqualTest(solution([13, 5, 11, 7, 23, 15]), [23, 15, 13, 11, 7, 5]);
});

test("좌표 정렬", () => {
  function solution(arr) {
    const N = arr.length;
    for (let i = 0; i < N; i++) {
      let min = i;
      for (let j = i + 1; j < N; j++) {
        if (arr[j][0] < arr[min][0] || arr[j][0] === arr[min][0]) {
          if (arr[j][1] < arr[min][1]) {
            min = j;
          }
        }
      }
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
    return arr;
  }
  expectEqualTest(
    solution([
      [2, 7],
      [1, 3],
      [1, 2],
      [2, 1],
    ]),
    [
      [1, 2],
      [1, 3],
      [2, 1],
      [2, 7],
    ]
  );
});

test("회의실 배정", () => {
  function solution(arr) {
    arr.sort((a, b) => {
      if (a[1] == b[1]) return a[0] - b[0];
      else return a[1] - b[1];
    });
    const N = arr.length;
    let count = 1;
    let lastEndTime = arr[0][1];
    for (let i = 1; i < N; i++) {
      if (arr[i][0] >= lastEndTime) {
        count++;
        lastEndTime = arr[i][1];
      }
    }
    return count;
  }
  const result = solution([
    [1, 4],
    [2, 3],
    [3, 5],
    [4, 6],
    [5, 7],
  ]);
  expectEqualTest(result, 3);
  expectEqualTest(
    solution([
      [3, 3],
      [1, 3],
      [2, 3],
    ]),
    2
  );
});

test("결혼식", () => {
  function solution(arr) {
    const newArr = [];
    arr.forEach((d) => {
      newArr.push([d[0], "s"]);
      newArr.push([d[1], "e"]);
    });
    newArr.sort((a, b) => {
      if (a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt();
      return a[0] - b[0];
    });
    LOG(newArr, "newaszx");
    let max = 0;
    let cnt = 0;
    for (let [_, code] of newArr) {
      if (code === "s") cnt++;
      else cnt--;

      max = Math.max(max, cnt);
    }
    return max;
  }
  const result = solution([
    [14, 18],
    [12, 15],
    [15, 20],
    [20, 30],
    [5, 14],
  ]);
  expectEqualTest(result, 2);
});
