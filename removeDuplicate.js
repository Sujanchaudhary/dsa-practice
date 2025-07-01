// Remove Duplicates from an Array
let arr = [1, 2, 1, 4, 5, 7, 7, 8, 9, 9];
let arr2 = [
  { id: 1, name: "sujan" },
  { id: 2, name: "ram" },
  { id: 1, name: "sujan" },
  { id: 3, name: "hari" },
  { id: 2, name: "ram" },
  { id: 4, name: "gita" },
];

function removeDuplicatedArr(params) {
  let result = [];

  for (let index = 0; index < params.length; index++) {
    const element = params[index];
    if (!result.includes(element)) {
      result.push(element);
    }
  }
  return result;
}

const result = removeDuplicatedArr(arr);
console.log(result);

function removeDuplicatedArrobj(arr) {
  const seen = new Set();
  return arr.filter((item) => {
    if (seen.has(item.id)) {
      return false;
    } else {
      seen.add(item.id);
      return true;
    }
  });
}

let result2 = removeDuplicatedArrobj(arr2);
console.log(result2);

// function removeDuplicates(arr) {
//   const seen = new Set();
//   const result = [];

//   for (const item of arr) {
//     if (!seen.has(item.id)) {
//       seen.add(item.id);
//       result.push(item);
//     }
//   }

//   return result;
// }
