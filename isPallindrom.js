function isPalindrome(str) {
  if (typeof str !== "string") return false;

  let reversed = str.split("").reverse().join("");
  return str === reversed;
}

let str = "racecar";
console.log(isPalindrome(str)); // true
