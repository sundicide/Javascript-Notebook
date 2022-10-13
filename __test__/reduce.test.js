import { LOG } from "./utils";

var a = [1, 2, 3, 4];

var result = a.reduce((accu, curr) => {
  accu += curr;
  return accu;
  // return b + c;
}, 0);

console.log(result);
console.log(a.reduce((a, b) => a * b));
LOG();
