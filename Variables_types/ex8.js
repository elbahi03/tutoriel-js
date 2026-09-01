// Challenge 8 : Calcul de la moyenne géométrique :

var prompt = require('prompt-sync')();

let num1 = Number(prompt("valeur 1 : "));
let num2 = Number(prompt("valeur 2 : "));
let num3 = Number(prompt("valeur 3 : "));

let Moyenne = Math.pow((num1 * num2 * num3),(1/3));

console.log("la moyenne géométrique de trois nombres :");
console.log(Moyenne);

