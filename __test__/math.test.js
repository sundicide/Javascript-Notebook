import { expectEqualTest as eET } from "./utils";

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
test("math", () => {
  const num = 2.5;

  eET(Math.floor(num), 2);

  eET(Math.ceil(2.1), 3);

  eET(Math.round(2.4), 2);
  eET(Math.round(2.5), 3);
});
