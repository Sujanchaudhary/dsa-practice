function maxNum(arr) {
  let max = arr[0]; // Start with the first element

  for (const element of arr) {
    if (element > max) {
      max = element;
    }
  }

  return max;
}

let arr = [3, 6, 8, 1, -4, -5, 2, 9];
let result = maxNum(arr);
console.log(result); // 9
