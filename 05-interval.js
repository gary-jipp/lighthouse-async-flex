
let i = 10;

const obj = setInterval(function() {
  if (i < 0) {
    console.log("Clearing Interval", this);
    clearInterval(this);
    return;
  }

  console.log("Hello Interval", i);
  i--;

}, 400);
