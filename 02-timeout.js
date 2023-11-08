
console.log("01: Start of the code");

setTimeout(() => {
  console.log("02: We are inside the callback");
}, 30);


setTimeout(() => {
  console.log("03: We are inside the callback");
}, 20);

for (let i = 0; i < 100; i++) {
  const date = new Date();
  console.log(date, i);
}

console.log("04: End of the code");
