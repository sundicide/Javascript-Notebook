export function LOG(...args) {
  console.log(...args);
}

export function expectEqualTest(exp, toBe) {
  return expect(exp).toEqual(toBe);
}
