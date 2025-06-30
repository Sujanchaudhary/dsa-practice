// checking sum  zero - problem 1
// [-5,-4,-3,-2, 0,2,4,6,8] -> intput

function sumPairZero(arr) {
  for (let number of arr) {
    for (let index = 1; index < arr.length; index++) {
      const element = arr[index];
      if (number + element === 0) {
        return [number, element];
      }
    }
  }
}



console.log(sumPairZero([-5, -4, -3, -2, 0, 2, 4, 6, 8]));
