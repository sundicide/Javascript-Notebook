import { expectEqualTest, LOG } from "./utils";

test("replace test", () => {
  var a = "abc";
  a.replace("b", "d");
  expectEqualTest(a, "abc"); // 원본은 안바뀐다.
});

// 문자열을 array로 만들기 위해 split을 사용할 필요 없이
// for loop로 사용 가능
test("for loop test", () => {
  var s = "ABCDEFGHI";
  var result = "";
  for (let x of s) {
    result += x;
  }
  expectEqualTest(s, result);
});
