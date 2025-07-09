function sumOfDigits(n) {
  let nArr = n.toString().split("");
  let result = 0;
  for (const element of nArr) {
    result += Number(element);
  }
  return result;
}

let result = sumOfDigits(1234);
console.log(result);
