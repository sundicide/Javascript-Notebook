var test2 = "00000010100101000001111010011100";
var result = "00111001011110000010100101000000";

function log(...args) {
  console.log(...args);
}
function parse(num, radix) {
  return parseInt(num, radix);
}

log("parse/test2/2", parse(test2, 2));
log("parse/result/2", parse(result, 2));
log("~test2", ~test2);
// log(">>>", BigInt.asIntN(test2));
log(">>s>", new Uint32Array([parse(test2, 2)])[0]);
log("zz", sixteen_bits_reverse(parseInt(test2, 2)));

function rev(x) {
  x = ((x >> 1) & 0x55555555) | ((x & 0x55555555) << 1);
  x = ((x >> 2) & 0x33333333) | ((x & 0x33333333) << 2);
  x = ((x >> 4) & 0x0f0f0f0f) | ((x & 0x0f0f0f0f) << 4);
  x = ((x >> 8) & 0x00ff00ff) | ((x & 0x00ff00ff) << 8);
  x = (x >>> 16) | (x << 16);

  return x >>> 0;
}
console.log("sup", rev(parse(test2, 2)));

test("bit operator", () => {
  // 0011 << 2 => 1100 = 12
  expect(3 << 2).toBe(12);
});

function sixteen_bits_reverse(num) {
  var result = 0;
  for (var i = 0; i < 32; i++) {
    result = result * 2 + (num % 2);
    num = Math.floor(num / 2);
  }
  return result;
}

function reverseBits(num) {
  let reversed = num.toString(2);
  console.log(reversed);
  const padding = "0";
  reversed = padding.repeat(32 - reversed.length) + reversed;
  console.log(reversed, reversed.split("").reverse().join(""));
  return parseInt(reversed.split("").reverse().join(""), 2);
}
reverseBits(9);
