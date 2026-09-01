// Challenge 2 : Échange de Valeurs

var prompt = require('prompt-sync')();

let num1 = Number(prompt("valeur num1 : "));
let num2 = Number(prompt("valeur num2 : "));

let A = num1 ;
num1 = num2 ;
num2 = A;

console.log("num1 = "+ num1);
console.log("num2 = "+ num2);

