function promiseTimeout(ms) {
  console.log("Running");
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);

  });
}

async function run() {
  console.log("Start!!");
  await promiseTimeout(2000);
  console.log("Stop!!");
}
console.log("Before start")
run();
console.log("After start")
