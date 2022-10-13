import { expectEqualTest, LOG } from "../utils";

test("problem 02", () => {
  function solution(game, a, b) {
    const results = [];
    for (let i = 0; i < game; i++) {
      const result = a[i] - b[i];
      if (result === 0) {
        results.push("D");
      } else if (result === -1 || result === 2) {
        results.push("B");
      } else if (result === -2 || result === 1) {
        results.push("A");
      }
    }
    return results;
  }
  const result = solution(5, [2, 3, 3, 1, 3], [1, 1, 2, 2, 3]);
  expectEqualTest(result, ["A", "B", "A", "B", "D"]);
});
