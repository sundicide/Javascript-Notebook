import { LOG, expectEqualTest } from './utils';

console.clear();

var a = [1, 2, 3, 4, 5];

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// 원본은 안바뀐다
test('slice test', () => {
  var myArr = [1, 2, 3, 4];
  expectEqualTest(myArr.slice(), myArr);
  expectEqualTest(myArr.slice(-2), [3, 4]);
  expectEqualTest(myArr.slice(2, 3), [3]);
  expectEqualTest(myArr, [1, 2, 3, 4]);
});

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// 원본이 바뀐다
test('splice test', () => {
  var myArr = [1, 2, 3, 4];
  expectEqualTest(myArr.splice(), []);
  expectEqualTest(myArr.splice(-2, 1), [3]);
  expectEqualTest(myArr, [1, 2, 4]);
  expectEqualTest(myArr.splice(2, 1, 'a', 'b', 'c'), [4]);
  expectEqualTest(myArr, [1, 2, 'a', 'b', 'c']);
});

test('concat test', () => {
  var myArr = [1, 2, 3, 4];
  myArr.concat([5, 6]);
  expectEqualTest(myArr, [1, 2, 3, 4]); // concat은 원본 안바뀐다.
  const newMyArr = myArr.concat([5, 6]);
  expectEqualTest(newMyArr, [1, 2, 3, 4, 5, 6]);
});

test('for loop test', () => {
  const arr = [];
  for (let i = 0; i < 10; i += 2) {
    arr.push(i);
  }
  expectEqualTest(arr, [0, 2, 4, 6, 8]);
});

test('shift, unshift test', () => {
  const arr = [1, 2, 3];
  arr.shift();
  expectEqualTest(arr, [2, 3]);
  arr.unshift(4);
  expectEqualTest(arr, [4, 2, 3]);
});

LOG(a.slice(2, a.length).toString(), a);

let accu = 0;
a.find((d) => (accu += d));

var b = [1];
LOG(
  'Accu',
  b.reduce((a, b) => a + b)
);

LOG('includes', [1, 2, 3, 4, 5].includes(2));

LOG('slice', a.splice(0, 2), a);

b = [1, 2];
b.shift();

LOG('shift', b);

/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
 * sort는 원본 배열이 변경된다.
 * 직접 함수를 전달할 수 있는데
 *  (before, after) 가 들어간다
 *    리턴 값이 > 0 이 before뒤에 after가 온다
 *    0 이라면 그대로
 *    < 0 이라면 after 뒤에 before가 온다.
 */
test('sortTest', () => {
  const arr = [5, 4, 3, 2, 1];

  arr.sort();
  expect(arr).toEqual([1, 2, 3, 4, 5]);

  expect(6 > 2).toBe(true);
  expect(1 > 2).toBe(false);

  (() => {
    const arr = [5, 4, 3, 2, 1];
    const sortedArr = arr.sort();
    expect(sortedArr[0]).toEqual(1);
    expect(arr[0]).toEqual(1);
  })();
  (() => {
    const arr = [5, 4, 3, 2, 1];
    const sortedArr2 = [...arr].sort();
    expect(sortedArr2[0]).toEqual(1);
    expect(arr[0]).toEqual(5);
  })();
});
test('sort order', () => {
  const arr = [-1, 4, 5, 6, 2];
  arr.sort((a, b) => a - b);
  expect(arr).toEqual([-1, 2, 4, 5, 6]);

  arr.sort((a, b) => b - a);
  expect(arr).toEqual([6, 5, 4, 2, -1]);
});

test('배열의 모든 조합의 수', () => {
  const arr = ['1', '2', '3', '4'];
  const result = [];
  function iter(accu, idx) {
    for (let i = idx; i < arr.length; i++) {
      result.push(accu + arr[i]);
      iter(accu + arr[i], i + 1);
    }
  }
  iter('', 0);

  expect(result).toEqual([
    '1',
    '12',
    '123',
    '1234',
    '124',
    '13',
    '134',
    '14',
    '2',
    '23',
    '234',
    '24',
    '3',
    '34',
    '4',
  ]);
});
