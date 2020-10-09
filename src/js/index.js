const app = new App();

function makePeople() {
  let person1 = new Person("Morgan");
  let person2 = new Person("Nadav");
  return [person1, person2];
}

function Person(name) {
  this.name = name;
  this.greet = function () {
    console.log(`Hi, I'm ${this.name}`);
  };
}

function testAdd() {
  let expectedAnswer = 4;
  let answer = add(2, 2);
  if (answer == expectedAnswer) {
    console.log("passed");
  } else {
    console.log("failed");
    console.log(`Expected to get ${expectedAnswer}, but got ${answer}`);
  }
}

testAdd();

let c = 0;
function addToC(a, b) {
  c += a + b;
  return a + b;
}

addToC(1, 3);
addToC(1, 3);
addToC(1, 3);
addToC(1, 3);
addToC(1, 3);
addToC(1, 3);
addToC(1, 3);

const person = { name: "Morgan" };

function changeName(person, name) {
  return { ...person, name };
}

const newPerson = changeName(person, "Ashley");
