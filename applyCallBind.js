function fnc(greeting) {
  console.log(greeting + " " + this.name);
}

fnc.call({ name: "sujan chaudhary" }, "Hello");
fnc.apply({ name: "sujan chaudhary" }, ["Hello"]);
let reuseFnc = fnc.bind({ name: "sujan chaudhary" });
reuseFnc("Subha Laxmi");
