const isValidIP = (ip) => {
  let str = ip.split(".");
  let status = 0;

  if (str.length != 4) {
    status += 1;
  } else {
    str.forEach((element) => {
      if (element > 0 && element < 256 && element[0] != 0) {
      } else {
        status += 1;
      }
    });
  }

  console.log(status == 0);
};

isValidIP("1.2.3.4");
isValidIP("1.2.3");
isValidIP("1.2.3.4.5");
isValidIP("123.45.67.89");
isValidIP("123.456.78.90");
isValidIP("123.045.067.089");
