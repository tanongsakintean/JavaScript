const simplePair = (num1, num2) => {
  let pair = [];
  const numFull = num1;
  //old
  // numFull.forEach((el1) => {
  //   numFull.forEach((el2, key) => {
  //     if (el1 * numFull[key + 1] == num2 && numFull[key + 1] != el1) {
  //       let same = 0;
  //       pair.forEach((el) => {
  //         if (el.includes(el1) || el.includes(numFull[key + 1])) {
  //           same += 1;
  //         }
  //       });
  //       same == 0 ? pair.push([el1, numFull[key + 1]]) : null;
  //     }
  //   });
  // });
  // pair.length == 0 ? console.log("null") : console.log(pair);
  ///new

  num1.map((item) => {
    numFull.reduce((current, next) => {
      item * next == num2 ? pair.push([item, next]) : null;
    });
  });
  return pair.slice(0, pair.length / 2);
};

// simplePair([1, 2, 3], 3); //=>[ [ 1, 3 ] ]
// simplePair([1, 2, 3], 6); //=> [ [ 2, 3 ] ]
simplePair([1, 2, 3, 4, 5, 6, 8], 12); // =>[ [ 2, 6 ], [ 3, 4 ] ]
