function flattenArray(arr) {
  return arr.reduce((acc, value) => {
    if (Array.isArray(value)) {
      return acc.concat(flattenArray(value)); // recurse if value is an array
    } else {
      return acc.concat(value); // otherwise just add the value
    }
  }, []);
}

const result = flattenArray([1, [2, [3, 4], 5]]);
console.log(result);


const users = [
  { name: "Alice", skills: ["JS", "React"] },
  { name: "Bob", skills: ["JS", "Node"] },
];

const uniqueSkills = [
  ...new Set(users.flatMap(user => user.skills)),
];

