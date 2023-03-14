import { expectEqualTest, LOG } from '../utils';

test('problem 1', () => {
  function solution(str) {
    const strArr = str.toLowerCase().split('');
    const compareCount = Math.floor(strArr.length / 2);

    let result = true;
    for (let i = 0; i < compareCount; i++) {
      if (strArr[i] !== strArr[strArr.length - 1 - i]) {
        result = false;
        break;
      }
    }

    return result;
  }
  expectEqualTest(solution('gooG'), true);
});

test('problem 3', () => {
  function solution(str) {
    const regex = /[0-9]/g;
    return parseInt(
      str
        .split('')
        .filter((d) => d.match(regex))
        .join(''),
      10
    );
  }
  expectEqualTest(solution('a123'), 123);
  expectEqualTest(solution('a0123'), 123);
});
