var prompt = require('prompt-sync')();
var x = Number(prompt('What is your first number?'));
var y = Number(prompt('What is your second number?'));

if (x % y === 0)
{
  console.log("Yes")
}
else {
  console.log("No")
}

if (y % x === 0)
{
  console.log("Yes")
}
else {
  console.log("No")
}
