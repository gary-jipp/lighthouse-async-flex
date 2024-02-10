
console.log("01: Start of the code");

const doStuff = function() {
  console.log("Doing stuff now");
};

setTimeout(doStuff, 3000);

// If we set the timeout to 1 ms.??
setTimeout(() => {
  console.log("02: We are inside the 1 ms callback");
}, 1);


setTimeout(() => {
  console.log("03: We are inside the 20 ms callback");
}, 20);

// Will this be interrupted by our setTimeout ?
for (let i = 0; i < 100; i++) {
  const date = new Date();
  console.log(date, i);
}

console.log("04: End of the code");
