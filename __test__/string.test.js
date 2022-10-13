import { expectEqualTest, LOG } from "./utils";

test("replace test", () => {
  var a = "abc";
  a.replace("b", "d");
  expectEqualTest(a, "abc"); // 원본은 안바뀐다.
});
