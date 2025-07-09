function isPowerOfTwo(n) {
  let op = false;
  for (let index = 1; index < n; index++) {
    if (2 ** index === n) {
      op = true;
    }
  }
  return op;
}
let result = isPowerOfTwo(8);
console.log(result);
