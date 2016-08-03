var prompt = require('prompt-sync')();

//First Number
var z = Number(prompt('What is z?'));

//Second Number
var y = Number(prompt('What is y?'));

//Third Number
var x = Number(prompt('What is x?'));

if (y<z<x) {
console.log("0")

} else if (y<x<z) {
console.log("1")

} else if (z<y<x) {
console.log("-1")
}
