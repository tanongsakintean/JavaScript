function promiseTimeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
}

promiseTimeout(2000)
  .then(() => {
    console.log("Done!!");
    return promiseTimeout(1000);
  })
  .then(() => {
    console.log("Also done!!");
    return Promise.resolve(42);
  })
  .then((result) => {
    console.log(result);
  })
  .catch(() => {
    console.log("Error!");
  });

// function run(status) {
//   let val = new Promise((resolve, reject) => {
//     status ? resolve("ddd") : reject("bbbb");
//   });

//   val.then(
//     (res) => {
//       console.log(res);
//     },

//     (res) => {
//       console.log(Error(res));
//     }
//   );
// }

// run(true);
