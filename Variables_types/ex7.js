// Challenge 7 : Moyenne pondérée de trois nombres :

var prompt = require('prompt-sync')();

let num1 = Number(prompt("valeur 1 : "));
let num2 = Number(prompt("valeur 2 : "));
let num3 = Number(prompt("valeur 3 : "));

let cof1 = num1 * 2 ;
let cof2 = num2 * 3 ;
let cof3 = num3 * 5 ;

let moyenne = ( cof1 + cof2 + cof3 ) / 10 ;

console.log("la moyenne pondérée de trois nombres : ");
console.log(moyenne);


