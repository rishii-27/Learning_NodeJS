// console.log("a");
// console.log("b");
// setTimeout(() => console.log("c"), 3000);
// setTimeout(() => console.log("d"), 0);
// console.log("e");

// *******************************************

function delayPrint(value, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(value);
      resolve();
    }, delay);
  });
}

//Using .then()
// function printSequence() {
//   delayPrint("a", 0)
//     .then(() => delayPrint("b", 1000))
//     .then(() => delayPrint("c", 500))
//     .then(() => delayPrint("d", 300))
//     .then(() => delayPrint("e", 100));
// }

// using async await
async function printSequence() {
  await delayPrint("a", 1000);
  await delayPrint("b", 500);
  await delayPrint("c", 200);
  await delayPrint("d", 100);
  await delayPrint("e", 500);
}

printSequence();
