let arr = [2, 3, 5, 6, 7, 8];
function reverseArray() {
  let result = [];
  for (let index = arr.length - 1; index >= 0; index--) {
    const element = arr[index];
    result.push(element);
  }
  return result;
}

const result = reverseArray(arr);



console.log(result);
