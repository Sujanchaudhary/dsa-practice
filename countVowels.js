let str = "Hello world";

let vowel = ["a", "e", "i", "o", "u"];

function checkVowel(str) {
  let strArr = str.split("");
  let count = 0;
  for (const element of strArr) {
    if (vowel.includes(element)) {
      count++;
    }
  }
  return count;
}
let result = checkVowel(str);
console.log(result);
