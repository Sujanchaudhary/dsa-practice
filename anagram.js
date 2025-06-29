// check for anagram word

function isAanagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let strCountObj = {};
  for (letter of str1) {
    strCountObj[letter] = (strCountObj[letter] || 0) + 1;
  }
  for (letter of str2) {
    if (!strCountObj[letter]) {
      false;
    }
    strCountObj[letter]--
  }
  return true;
}
let result = isAanagram("hello", "llheo");

console.log(result);
