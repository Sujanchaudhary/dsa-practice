function ascendingOrder(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

let arr = [9, 2, 4, 6, 8, 1, 5, 7];
const result = ascendingOrder(arr);
console.log(result); // [1, 2, 4, 5, 6, 7, 8, 9]
