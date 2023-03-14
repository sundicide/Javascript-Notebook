import { expectEqualTest } from '../utils';

// https://school.programmers.co.kr/learn/courses/30/lessons/17683

test('방금 그 곡', () => {
  function solution(m, musicinfos) {
    const regex = /[A-Z]{1}\#?/g;
    const length = musicinfos.length;

    const replace = new Map([
      ['C#', 1],
      ['D#', 2],
      ['F#', 3],
      ['G#', 4],
      ['A#', 5],
      ['E#', 6],
      ['B#', 7],
    ]);
    let i = 0;

    const resultCodes = [];
    while (i < length) {
      const [start, end, title, code] = musicinfos[i].split(',');

      const codes = code.match(regex);
      const codeLength = codes.length;

      const [startH, startM] = start.split(':');
      const [endH, endM] = end.split(':');

      const startDate = new Date(2000, 1, 1, startH, startM);
      const endDate = new Date(2000, 1, 1, endH, endM);

      let diff = (endDate - startDate) / 60000;
      const remain = diff % codeLength;
      const top = Math.floor(diff / codeLength);

      let resultCode = [];
      if (top === 0) {
        resultCode = codes.slice(0, diff);
      } else {
        for (let i = top; i > 0; i--) {
          resultCode.push(...codes);
        }
        resultCode.push(...codes.slice(0, remain));
      }

      const ss = resultCode
        .map((code) => {
          if (replace.has(code)) {
            return replace.get(code);
          }
          return code;
        })
        .join('');
      resultCodes.push([ss, title, diff]);
      i += 1;
    }
    let diffAnswer = Number.MIN_SAFE_INTEGER;
    let answer = '';

    const targetM = m
      .match(regex)
      .map((code) => {
        if (replace.has(code)) {
          return replace.get(code);
        }
        return code;
      })
      .join('');

    for (let [code, title, diff] of resultCodes) {
      if (code.includes(targetM) && diff > diffAnswer) {
        answer = title;
        diffAnswer = diff;
      }
    }
    return answer === '' ? '(None)' : answer;
  }

  const case1 = [
    'ABCDEFG',
    ['12:00,12:14,HELLO,CDEFGAB', '13:00,13:05,WORLD,ABCDEF'],
    'HELLO',
  ];
  expectEqualTest(solution(case1[0], case1[1]), case1[2]);
  const case2 = [
    'CC#BCC#BCC#BCC#B',
    ['03:00,03:30,FOO,CC#B', '04:00,04:08,BAR,CC#BCC#BCC#B'],
    'FOO',
  ];
  expectEqualTest(solution(case2[0], case2[1]), case2[2]);
  const case3 = [
    'ABCDEFG',
    ['12:00,12:14,HELLO,CDEFGAB', '13:00,13:05,WORLD,ABCDEF'],
    'HELLO',
  ];
  expectEqualTest(solution(case3[0], case3[1]), case3[2]);
});
