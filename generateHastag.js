// function generateHashtag(str) {
//   if (!str || str.trim().length === 0) {
//     return false;
//   }

//   let strArr = str.trim().split(/\s+/); // handles multiple spaces
//   let result = "#";

//   for (const item of strArr) {
//     result += item[0].toUpperCase() + item.slice(1);
//   }

//   return result.length > 140 ? false : result;
// }

function generateHashtag(str) {
  if (!str || str.trim().length === 0) {
    return false;
  }

  let strArr = str.trim().split(/\s+/); // handles multiple spaces
  let result = "";

  let data = strArr.map((a) => a.charAt(0).toUpperCase() + a.slice(1));
  result =  `#${data.join("")}`

  return result.length > 200 ? false : result;
}

let str = "my name is sujan chaudahry i am frontend developer";

console.log(generateHashtag(str)); // #MyNameIsSujanChaudahryIAmFrontendDeveloper
