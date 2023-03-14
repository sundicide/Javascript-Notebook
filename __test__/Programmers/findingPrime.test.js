// https://school.programmers.co.kr/learn/courses/30/lessons/42839
import { expectEqualTest } from '../utils';

test('소수 찾기', () => {
  const notPrimeArr = [0, 1];

  function isPrime(num) {
    const found = notPrimeArr.findIndex((d) => d === num);
    if (found > -1) return false;
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
      if (num % i === 0) {
        notPrimeArr.push(num);
        return false;
      }
    }
    return true;
  }

  function solution(numbers) {
    const numberSet = new Set();
    const numberArr = numbers.split('');
    const length = numberArr.length;

    function DFS(visited, str) {
      if (str.length === length) {
        return;
      }
      for (let i = 0; i < length; i++) {
        if (visited[i] === 1) {
          continue;
        }
        const newStr = str + numberArr[i];
        const strNumber = parseInt(newStr, 10);
        if (isPrime(strNumber)) {
          numberSet.add(strNumber);
        }
        visited[i] = 1;
        DFS([...visited], newStr);
        visited[i] = 0;
      }
    }
    DFS(
      Array.from(Array(length), () => 0),
      ''
    );
    return numberSet.size;
  }

  const case1 = ['17', 3];
  expectEqualTest(solution(case1[0]), case1[1]);
  const case2 = ['011', 2];
  expectEqualTest(solution(case2[0]), case2[1]);
});
