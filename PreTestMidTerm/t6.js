const removeDups = (str) => {
  //   let Dups = [];
  let oldStr = str;
  ///Old
  //     typeof str[0] == "number" ? str.sort((a, b) => a - b) : str.sort();
  //   for (let i = 0; i < oldStr.length; i++) {
  //     if (oldStr[i] == oldStr[i + 1]) {
  //       Dups.push(...oldStr.splice(i, 1));
  //     }
  //   }
  //N new
  let newStr = [];
  str.forEach((el) => {
    !newStr.includes(el) ? newStr.push(el) : null;
  });
  console.log(newStr);
};

removeDups([1, 0, 1, 0]); // => [ 1, 0 ]
removeDups(["Joth", "Beer", "Joth"]); //=> [ 'Joth', 'Beer' ]
removeDups(["1", "Beer", "Joth", "Beer", "1"]); // => [ '1', 'Beer', 'Joth' ]
