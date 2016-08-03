var prompt = require('prompt-sync')();
var userInput = Number(prompt('What is your number?'));
if (userInput % 2 === 0)
{
  console.log("This is an even number")
}
else {
  console.log("This is an odd number")
}
