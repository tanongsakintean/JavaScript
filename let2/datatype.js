const people = ["Aron", "Mel", "John"];
const one = 1;
const str = "Hello World";
const b = true;
const employee = {
  FirstName: "Anirach",
  LastName: "Minkhwan",
};

function sayHello(person) {
  return "Hello " + person.FirstName + " " + person.LastName;
}

console.log(typeof people);
console.log(typeof sayHello);
console.log(employee instanceof Array);
console.log(sayHello(employee));
