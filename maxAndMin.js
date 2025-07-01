// Find the Largest and Smallest Number

let arr = [3, 6, 8, 1, -4, -5, 2, 9];

// function maxMin(arr) {
//   let result = {};
//   const sortedArr = arr.sort((a, b) => a - b);

//   result.min = sortedArr[0];
//   result.max = sortedArr[sortedArr.length - 1];
//   return result;
// }

function maxMin(arr) {
  let result = {
    min: arr[0],
    max: arr[0],
  };
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (element < result.min) {
      result.min = element;
    }
    if (element > result.max) {
      result.max = element;
    }
  }
  return result;
}

const result = maxMin(arr);
console.log(result);
