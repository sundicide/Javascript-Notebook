const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: function () {
    return 2 * Math.PI * this.radius;
  }
};

test("", () => {
  expect(shape.diameter()).toBe(20);
});
console.log(shape.perimeter());
