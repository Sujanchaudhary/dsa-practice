function factorial(n) {
  if (n < 0) {
    return false;
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
let result = factorial(3);

console.log(result);
