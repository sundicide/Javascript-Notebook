import { expectEqualTest as eET, LOG } from './utils';

test('with special char', () => {
  // global flag가 없는 regex
  const regex = /[A-Z]\#?/;
  const testString = 'ABCDE#F';
  const resultString = testString.match(regex).join('');

  eET(resultString, 'A');

  // global flag와 함께 수행
  const regexWithGlobal = /[A-Z]\#?/g;
  const result2 = testString.match(regexWithGlobal);
  eET(result2.length === 6, true);
  eET(result2[0], 'A');
  eET(result2[1], 'B');
  eET(result2[2], 'C');
  eET(result2[3], 'D');
  eET(result2[4], 'E#');
  eET(result2[5], 'F');

  // #을 앞에다가 붙이면 아래와 같이 E가 아니라 F 앞에 붙는다.
  const regexFront = /\#?[A-Z]/g;
  const result3 = testString.match(regexFront);
  eET(result3.length, 6);
  eET(result3[4], 'E');
  eET(result3[5], '#F');
});
