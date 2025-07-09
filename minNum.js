function minNum(arr) {
  let min = arr[0];
  for (const element of arr) {
    if (element < min) {
      min = element;
    }
  }
  return min;
}
let arr = [5, -3, 0, 12, -7];

let res = minNum(arr);
console.log(res);
