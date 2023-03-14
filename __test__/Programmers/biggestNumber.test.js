// https://school.programmers.co.kr/learn/courses/30/lessons/42746#
import { expectEqualTest } from '../utils';

test('가장 큰 수', () => {
  function solution(numbers) {
    const newNumbers = numbers
      .map((d, i) => d + '')
      .sort((a, b) => {
        if (a === b) return 0;
        else if (a + b < b + a) return 1;
        else return -1;
      });
    if (newNumbers[0] === '0') return '0';
    else return newNumbers.join('');
  }

  expectEqualTest(solution([6, 10, 2]), '6210');
  expectEqualTest(solution([3, 30, 34, 5, 9]), '9534330');
});
