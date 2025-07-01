const arr = [9, 3, 4, 6, 5, 2, 1];
function reverseArray<T>(arr: T[]): T[] {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
  return arr;
}
console.log(reverseArray<number>(arr));
