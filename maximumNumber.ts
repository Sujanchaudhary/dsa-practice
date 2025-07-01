function getMaxElm(arr: number[]): number {
  return Math.max(...arr);
}

const arr = [9, 3, 4, 6, 5, 2, 1];
const result = getMaxElm(arr);
console.log(result); // ✅ 9
