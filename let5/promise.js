// function promiseTimeout(ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, ms);
//   });
// }

// promiseTimeout(2000)
//   .then(() => {
//     console.log("Done!!");
//     return promiseTimeout(1000);
//   })
//   .then(() => {
//     console.log("Also done!!");
//     return Promise.resolve(42);
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch(() => {
//     console.log("Error!");
//   });

function run(status) {
  let val = new Promise((resolve, reject) => {
    status ? resolve("ddd") : reject("bbbb");
  });

  val.then(
    (res) => {
      console.log(res);
    },

    (res) => {
      console.log(Error(res));
    }
  );

  return val;
}

function sleep(meg, status) {
  const promise = new Promise((resolve, reject) => {
    status ? resolve(meg) : reject("ERROR");
  });
  promise.then(
    (res) => {
      console.log(res);
    },
    (res) => {
      console.log(Error(res));
    }
  );

  return promise;
}

function sit(status, num1, num2) {
   new Promise((resolve, reject) => {
    if (status) {
      resolve({ n1: num1, n2: num2 });
    } else {
      reject("Error");
    }
  }).then(
    (n) => {
      console.log(n.n1 + n.n2);
    },
    (meg) => {
      console.log(meg);
    }
  );
}

Promise.all([sit(true, 1, 9), sleep("Hello World!", true), run(true)]).then(
  (res) => {
    console.log(res);
  }
);
