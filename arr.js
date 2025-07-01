let arr = [1, 2, 1, 4, 5, 7, 7, 8, 9, 9];

let unique = [...new Set(arr)];
let ac = new Set();
ac.add(10);
ac.add(20);
ac.add(30);
console.log(ac.has(10));

// console.log(unique);

// const map = new Map();
// map.set("b", 2);
// map.set("a", 1);
// map.set("c", 3);

// for (let [key, value] of map) {
//   console.log(key, value); // Logs in the order: b, a, c
// }

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
//   speak() {
//     console.log(this.name + "barks");
//   }
// }

// class Dog extends Animal {
//   constructor(name, breed) {
//     super(name);
//     this.breed = breed;
//   }
//   describe() {
//     console.log(this.breed + this.name);
//   }
// }

// const a = new Dog("Dolly", "Labrador");
// a.describe();
const animal = {
  type: "animal",
  name: "Unnamed",
  speak() {
    console.log(`${this.name} the ${this.type} makes a sound.`);
  },
};

const dog = {
  name: "Buddy",
  type: "dog",
};

dog.__proto__ = animal;

dog.speak(); // Buddy the dog makes a sound.
