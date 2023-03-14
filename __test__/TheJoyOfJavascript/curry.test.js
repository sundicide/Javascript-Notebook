const add = (x) => (y) => x + y;
const addThreeTo = add(3);

test('addThreeTo', () => {
  expect(addThreeTo(4)).toBe(7);

  expect(add(3)(4)).toBe(7);
});

const curry =
  (fn) =>
  (...args1) =>
    args1.length === fn.length
      ? fn(...args1)
      : (...args2) => {
          const args = [...args1, ...args2];
          return args.length >= fn.length ? fn(...args) : curry(fn)(...args);
        };

const sum = curry((a, b) => a + b);

test('isSum', () => {
  expect(sum(2)(4)).toBe(6);
});
