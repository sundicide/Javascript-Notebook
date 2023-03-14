import { expectEqualTest } from '../utils';

// https://school.programmers.co.kr/learn/courses/30/lessons/86491
test('명함지갑 카드 크기', () => {
  function solution(sizes) {
    const mins = [];
    const maxs = [];
    for (let size of sizes) {
      const [w, h] = size;
      mins.push(Math.min(w, h));
      maxs.push(Math.max(w, h));
    }
    return Math.max(...maxs) * Math.max(...mins);
  }

  const case1 = [
    [
      [60, 50],
      [30, 70],
      [60, 30],
      [80, 40],
    ],
    4000,
  ];
  const case2 = [
    [
      [10, 7],
      [12, 3],
      [8, 15],
      [14, 7],
      [5, 15],
    ],
    120,
  ];
  const case3 = [
    [
      [14, 4],
      [19, 6],
      [6, 16],
      [18, 7],
      [7, 11],
    ],
    133,
  ];
  expectEqualTest(solution(case1[0]), case1[1]);
  expectEqualTest(solution(case2[0]), case2[1]);
  expectEqualTest(solution(case3[0]), case3[1]);
});
