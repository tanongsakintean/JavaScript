let value1 = ["Apple", 1, false];
let value2 = ["Fries", 2, true];
let value3 = ["Mars", 9, "Apple"];

let check = (v1, v2) => {
  let common = [];
  for (const v of v2) {
    if (v1.includes(v)) {
      common.push(v);
    }
  }

  if (common.length != 0) {
    return "common is " + common.map((v) => v);
  } else {
    return "not common";
  }
};

console.log("value 1 compare value 2 = " + check(value1, value2));
console.log("value 1 compare value 3 = " + check(value1, value3));
console.log("value 2 compare value 1 = " + check(value2, value1));

let furniture = ["Table", "Chairs", "Couch"];

furniture.forEach((val) => {
  for (const v of val) {
    console.log(v);
  }
  console.log("\n");
});
