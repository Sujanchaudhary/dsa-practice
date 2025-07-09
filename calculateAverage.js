function calculateAverage(arr) {
  let sumOfArr = 0;
  for (const element of arr) {
    sumOfArr += element;
  }
  console.log(sumOfArr);
  return sumOfArr / arr.length;
}

let arr = [5, 10, 2, 8];

let result = calculateAverage(arr);
console.log(result);
