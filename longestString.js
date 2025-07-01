// function getLongestString(str) {
//   let splitStr = str.split(" ");
//   let longestStr = "";

//   for (const item of splitStr) {
//     if (item.length > longestStr.length) {
//       longestStr = item;
//     }
//   }

//   return longestStr;
// }

function getLongestString(str) {
  let strArr = str.split(" ");

  return strArr.reduce(
    (acc, data) => (data.length > acc.length ? data : acc),
    ""
  );
}

let str = "this is sujan chaudhary javascript dsa challenge";

console.log(getLongestString(str)); // Output: "javascript"
