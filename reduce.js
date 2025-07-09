function uniqueData(arr) {
  return arr.reduce((acc, curr) => {
    if (!acc.includes(curr)) {
      acc.push(curr);
    }
    return acc;
  }, []);
}

let arr = [2, 4, 5, 8, 7, 8, 2];
let result = uniqueData(arr);
console.log(result); // [2, 4, 5, 8, 7]
