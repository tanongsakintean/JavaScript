const simplePair = (num1, num2) => {
  let pair = [];
  let numFull = num1;
  //old
  numFull.forEach((el1) => {
    numFull.forEach((el2, key) => {
      if (el1 * numFull[key + 1] == num2 && numFull[key + 1] != el1) {
        let same = 0;
        pair.forEach((el) => {
          if (el.includes(el1) || el.includes(numFull[key + 1])) {
            same += 1;
          }
        });
        same == 0 ? pair.push([el1, numFull[key + 1]]) : null;
      }
    });
  });
    pair.length == 0 ? console.log("null") : console.log(pair);
  ///new

  //   num1.forEach((el) => {
  //     num1.filter((n) => {
  //       pair.forEach((num) =>
  //         !num.includes(el) ? (el * n == num2 ? pair.push([el, n]) : null) : null
  //       );
  //     });
  //   });
//   console.log(pair);
};

simplePair([1, 2, 3], 3);
simplePair([1, 2, 3], 6);
simplePair([1, 2, 3], 9);
