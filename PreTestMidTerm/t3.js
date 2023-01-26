const capToFront = (str) => {
  let newStr = "";
  let BigStr = "";
  ///old
  // for (let i = 0; i < str.length; i++) {
  //   if (str[i] === str[i].toUpperCase()) {
  //     BigStr += str[i];
  //   } else {
  //     newStr += str[i];
  //   }
  // }
  // console.log(BigStr + newStr);
  ///N new
  console.log(Array.from(str).sort().join(""));
};

capToFront("hApPy");
capToFront("moveMENT");
capToFront("shOrtCAKE");
