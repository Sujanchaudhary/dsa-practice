function capitalizeWords(str) {
  let strArr = str.split(" ");
  let r = [];
  for (const element of strArr) {
    let uperCase = element.charAt(0).toUpperCase() + element.slice(1);
    r.push(uperCase);
  }
  return r.join(" ");
}

const result = capitalizeWords("hello world");
console.log(result);
