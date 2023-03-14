import { expectEqualTest, LOG } from '../utils';

test('prob 1', () => {
  function solution(str) {
    const arr = [];
    for (let x of str) {
      if (x === '(') {
        arr.push(x);
        continue;
      } else if (x === ')' && arr.length > 0 && arr[arr.length - 1] === '(') {
        arr.pop();
        continue;
      } else return false;
    }
    return arr.length === 0 ? true : false;
  }
  const result = solution('(()(()))(()');
  expectEqualTest(result, false);
});

test('prob  2', () => {
  function solution(str) {
    let ignoring = 0;
    let resultString = '';
    for (let x of str) {
      if (x === '(') {
        ignoring += 1;
      } else if (x === ')') {
        ignoring -= 1;
      } else if (ignoring > 0) {
        continue;
      } else if (ignoring === 0) {
        resultString += x;
      }
    }
    return resultString;
  }
  const result = solution('(A(BC)D)EF(G(H)(IJ)K)LM(N)');
  expectEqualTest(result, 'EFLM');
});

test('prob 3', () => {
  function solution(boards, moves) {
    let popedCount = 0;
    const stack = [];

    for (let x of moves) {
      let current = -1;
      for (let i = 0; i < boards.length; i++) {
        if (boards[i][x - 1] === 0) continue;
        else {
          current = boards[i][x - 1];
          boards[i][x - 1] = 0;
          break;
        }
      }
      if (current === -1) continue;

      const stackLength = stack.length;

      if (stackLength != 0 && stack[stackLength - 1] === current) {
        stack.pop();
        popedCount += 2;
      } else {
        stack.push(current);
      }
    }
    return popedCount;
  }
  const result = solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  );
  expectEqualTest(result, 4);
});

test('prob 4', () => {
  function solution(str) {
    const arr = [];

    for (let x of str) {
      if (x >= 0 || x <= 9) {
        arr.push(parseInt(x, 10));
      } else {
        const operator = x;
        const num1 = arr.pop();
        const num2 = arr.pop();
        let calc = 0;
        if (operator === '+') calc = num2 + num1;
        else if (operator === '-') calc = num2 - num1;
        else if (operator === '*') calc = num2 * num1;
        else if (operator === '/') calc = num2 / num1;
        arr.push(calc);
      }
    }
    return arr[0];
  }
  const result = solution('352+*9-');
  expectEqualTest(result, 12);
});
