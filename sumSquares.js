let arr = [1, 2, 3];

function sumSquares(arr) {
  let result = 0;
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    result += element ** 2;
  }
  return result;
}

let res = sumSquares(arr);
console.log(res);
