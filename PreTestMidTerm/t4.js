const totalVolume = (...num) => {
  let sum = 0;
  ///old
  //   num.forEach((val) => {
  //     sum += val.reduce((n1, n2) => n1 * n2);
  //   });
  //N new
  sum = num
    .map((n) => n.reduce((n1, n2) => n1 * n2))
    .reduce((n1, n2) => n1 + n2);
  console.log(sum);
};

totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]); // => 63
totalVolume([2, 2, 2], [2, 1, 1]); // => 10
totalVolume([1, 1, 1]); // => 1
