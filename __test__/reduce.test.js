import { expectEqualTest, LOG } from './utils';

var a = [1, 2, 3, 4];

var result = a.reduce((accu, curr) => {
  accu += curr;
  return accu;
  // return b + c;
}, 0);

console.log(result);
console.log(a.reduce((a, b) => a * b));

test('basic reduce test', () => {
  const arr = [1, 2, 3, 4];
  const sum = arr.reduce((accu, curr) => accu + curr, 0);
  expectEqualTest(sum, 10);
});
