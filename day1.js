// Write a function to check if a number is even or odd.
function getOddEven(n) {
  if (n % 2 === 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}

// getOddEven(10);

// Print numbers from 1 to 50.

for (let index = 1; index <= 50; index++) {
  //   console.log(index);
}

// Find the sum of numbers from 1 to n

function sumN(n) {
  return (n * (n + 1)) / 2;
}

// console.log(sumN(10));

let arr = [1, 2, 3, 4, 5, 6, 7, 8];

function checkMaxarr(arr) {
  let max = arr[0];
  console.log(max);
  for (let i = 1; i < arr.length; i++) {
    console.log(arr[i] > 8)
    // if (arr[i] > max) {
    //   max = arr[i];
    // }
  }
  return max;
}

checkMaxarr(arr); // Output: 8
