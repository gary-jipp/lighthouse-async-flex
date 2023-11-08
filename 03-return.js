console.log("01: Start of code");

const myFunction = function(callback) {
  const user = {username: "Alice"};

  console.log("02: before the setTimeout");
  setTimeout(() => {
    console.log("03: Inside the setTimeout");
    user.username = "Bob";
    callback(user);
  }, 500);


  console.log("04: After the setTimeout");

  return user;
};


const done = function(data) {
  console.log("05: Inside the callback");
  console.log(data);
};


myFunction(data => {
  console.log(data);
});



console.log("06: End of code");

// 1,2,3,4,5,6
// 1,5,2,3,4,6