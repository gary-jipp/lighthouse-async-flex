
// Returning stuff directly from the function
const add5 = function(num) {
  return num + 5;
};

const result = add5(12);
console.log("direct return: ", result);


// Returning stuff through a callback
const add5_cb = function(num, callback) {
  callback(num + 5);
};

// Our callback (can be any name)
const myCallback = function(result) {
  console.log("callback return: ", result);
};

const result2 = add5_cb(6, myCallback);
console.log(result2);