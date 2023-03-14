import { expectEqualTest } from '../utils';

test('문자열 내림차순으로 배치하기 ', () => {
  function solution(s) {
    const upperAcharCode = 'A'.charCodeAt();
    const upperZcharCode = 'Z'.charCodeAt();

    const strArr = Array.from(s).sort((a, b) => {
      const aCharCode = a.charCodeAt();
      const bCharCode = b.charCodeAt();

      let isAUpper = false;
      let isBUpper = false;
      if (aCharCode >= upperAcharCode && aCharCode <= upperZcharCode) {
        isAUpper = true;
      }
      if (bCharCode >= upperAcharCode && bCharCode <= upperZcharCode) {
        isBUpper = true;
      }

      if (isAUpper && !isBUpper) {
        return 1;
      } else if ((isAUpper && isBUpper) || (!isAUpper && !isBUpper)) {
        return bCharCode - aCharCode;
      } else if (!isAUpper && isBUpper) {
        return -1;
      }
    });
    return strArr.join('');
  }
  expectEqualTest(solution('Zbcdefg'), 'gfedcbZ');
});
