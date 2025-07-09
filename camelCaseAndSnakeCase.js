function camelCase(str) {
  let words = str.split(" ");
  let result = words[0]; // keep first word lowercase

  for (let i = 1; i < words.length; i++) {
    let word = words[i];
    // Capitalize the first letter + rest of the word
    result += word.charAt(0).toUpperCase() + word.slice(1);
  }

  return result;
}

let str = "hello world Ok";
let camelRes = camelCase(str);
console.log(camelRes); // "helloWorld"
