import { expectEqualTest, LOG } from './utils';

test('replace test', () => {
  let str = 'abc';
  str.replace('b', 'd');
  expectEqualTest(str, 'abc'); // 원본은 안바뀐다.

  const newStr = str.replace('b', 'd');
  expectEqualTest(newStr, 'adc');
});

// 문자열을 array로 만들기 위해 split을 사용할 필요 없이
// for loop로 사용 가능
test('for loop test', () => {
  let str = 'ABCDEFGHI';
  let result = '';
  for (let x of str) {
    result += x;
  }
  expectEqualTest(str, result);
});
