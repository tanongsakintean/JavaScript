let arr1 = ["A", true, 2];

//push and pop

console.log("\n*****************Push and pop***************\n");
console.log(arr1.push("new Value"));
console.log(arr1);
console.log(arr1.pop());
console.log(arr1);

///shift and unshift
console.log("\n*****************Shift and unshift***************\n");
console.log(arr1.unshift("new Value"));
console.log(arr1);
console.log(arr1.shift());
console.log(arr1);

///concat
console.log("\n*****************Concat ***************\n");
let arr2 = ["B", false, 3];
let newArr = arr1.concat(arr2);
let newArr2 = arr2.concat([1, 2, 3]);
console.log(newArr);
console.log(newArr2);
