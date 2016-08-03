var prompt = require('prompt-sync')();
var size = Number(prompt('What is the lenght?'));

genArray = [];
for (var i = 0; i < size; i++) {
  genArray.push(0);
}
console.log(genArray.length)
