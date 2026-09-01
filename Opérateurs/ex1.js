// Challenge 1 : Calculatrice de Base :

var prompt = require('prompt-sync')();

let A = prompt("nombre A :");
let B = prompt("nombre B : (B>0)");
console.log(typeof A);
// transferer string to number :
A = parseFloat(A);
B = parseFloat(B);
console.log(typeof A);
console.log("A + B =", A+B);
console.log("A - B =", A-B);
console.log("A * B =", A*B);
console.log("A / B =", A/B);

