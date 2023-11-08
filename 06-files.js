const fs = require('fs');

console.log("Start of Code");
let length = 0;

fs.readFile('data.html', {encoding: 'utf-8'}, (err, data) => {
  if (err) {
    return console.log(err);
  }

  console.log(data.length);
  length += data.length;

  fs.readFile('data2.html', {encoding: 'utf-8'}, (err, data) => {
    if (err) {
      return console.log(err);
    }

    length += data.length;
    console.log(data.length);
    console.log("Total: ", length);
  });

});



// ASCII 8-bits 255  english-centric
// UTF-8:  1,112,064, every language, plus emojis

console.log("End of Code");