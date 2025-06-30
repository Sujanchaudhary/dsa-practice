//  Check if Two Arrays are Equal

let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];

function checkIsEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let index = 0; index < arr1.length; index++) {
    if (arr1[index] !== arr2[index]) return false;
  }
  return true;
}

const result = checkIsEqual(arr1, arr2);
console.log(result);
