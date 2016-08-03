var prompt = require('prompt-sync')();
var n = Number(prompt('What is you number?'));

function factorial (n){
  if (n==0 || n==1){
    return 1;
  }
  return factorial(n-1)*n;
}
