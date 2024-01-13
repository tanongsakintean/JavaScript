const hightestDigit = (num) => {
  /// old
  //   let str = num.toString();
  //   console.log(Math.max(...str.split("")));
  //N new
  console.log(Array.from(String(num)).sort().pop());
};

hightestDigit(379); // => 9
hightestDigit(2); // => 2
hightestDigit(377401); // => 7
