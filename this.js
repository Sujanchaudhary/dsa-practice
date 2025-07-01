let obj = {
  name: "Ram",
  greet: function (greet) {
    console.log(greet + " " + this.name);
  },
};

obj.greet("Hello");

function newObj(name) {
  this.name = name;
  this.sayHello = function () {
    console.log(this.name);
  };
}

const p = new newObj("sujan");

p.sayHello();


