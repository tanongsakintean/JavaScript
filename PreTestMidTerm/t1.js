const numberSplit = (num) => {
  //N old
  // console.log([Math.floor(num / 2), Math.round(num / 2)]);
  //N new
  console.log([Math.floor((num * 50) / 100), Math.round((num * 50) / 100)]);
};

numberSplit(4);
numberSplit(10);
numberSplit(11);
numberSplit(-9);
