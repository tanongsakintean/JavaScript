const sumTwoSmallestNums = (num) => {
  //   let str = num.sort((a, b) => a - b);
  //   let sum = 0;

  //   for (let i = 0; i < str.length; i++) {
  //     if (!(str[i] + str[i] > 0)) {
  //       str.splice(i, 1);
  //     }
  //   }

  //   sum = str[0] + str[1];
  let numCale = [];
  sum = num.sort((a, b) => a - b);
  console.log(sum);
};

sumTwoSmallestNums([12, 5, 42, 2, 77, -44]); // => [ -44, 2, 5, 12, 42, 77 ]
sumTwoSmallestNums([10, 343445353, 1, -44]); // => [ -44, 1, 10, 343445353 ]
