//Date function return milliseconds that have slapsed
//since midnight on January 1, 1970, UTC
//this example take 2 seconds to run
const start = Date.now();

console.log("starting timer...");
///expected output: string timer..

setTimeout(() => {
  const millis = Date.now() - start;

  console.log(`seconds elapsed = ${Math.floor(millis / 1000)}`);
  /// expected output: seconds elapsed = 2;
}, 2000);
