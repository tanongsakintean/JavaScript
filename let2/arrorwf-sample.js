/// Arrow function with two arguments
const sum = (firstParam, secondParam) => {
  return firstParam + secondParam;
};

console.log(sum(2, 5));

//Arrow function with no arguemtns
const printHello = () => {
  console.log("hello");
};

printHello(); ///print: hello

//Arrow fun with a single argument
const checkWeight = (weight) => {
  console.log(`Baggage weight : ${weight} Kilogram.`);
};

checkWeight(25);

//Concise arrow function
const multiply = (a, b) => a * b;
console.log(multiply(2, 30)); //print: 60
