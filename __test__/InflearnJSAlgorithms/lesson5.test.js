import { expectEqualTest, LOG } from "../utils";

test("prob 1", () => {
  function solution(a, b) {
    const aLength = a.length;
    const bLength = b.length;
    let result = [];
    let p1 = 0;
    let p2 = 0;
    while (p1 < aLength && p2 < bLength) {
      if (a[p1] < b[p2]) {
        result.push(a[p1++]);
      } else {
        result.push(b[p2++]);
      }
    }
    while (p1 < aLength) result.push(a[p1++]);
    while (p2 < bLength) result.push(b[p2++]);

    return result;
  }
  const result = solution([1, 3, 5], [2, 3, 6, 7, 9]);
  expectEqualTest(result, [1, 2, 3, 3, 5, 6, 7, 9]);
});
