// https://school.programmers.co.kr/learn/courses/30/lessons/12945

test('fibonaachi', () => {
  function solution(n) {
    const denominator = 1234567;
    if (n === 0) return 0;
    if (n === 1) return 1;

    let p2 = 0;
    let p1 = 1;

    for (let i = 2; i <= n; i++) {
      [p2, p1] = [p1 % denominator, (p2 + p1) % denominator];
    }
    if (p1 >= Number.MAX_VALUE) {
      return BigInt.asIntN(10, BigInt(p1) % BigInt(1234567));
    }
    return p1 % denominator;
  }

  const case1 = [3, 2];
  console.log(solution(case1[0]));

  const case2 = [5, 5];
  console.log(solution(case2[0]));
});
