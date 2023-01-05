const names = ["Justin", "Sarah", "Christopher"];

console.log("-- while --");
let index = 0;
while (index < names.length) {
  const name = names[index];
  console.log(name);
  index++;
}

console.log("-- for --");
for (let i = 0; i < names.length; i++) {
  const name = names[i];
  console.log(name);
}

console.log("-- for of --");
for (const name of names) {
  console.log(name);
}
