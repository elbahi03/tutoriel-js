// Challenge 13 : Affichage des valeurs binaire et hexadécimale équivalentes :

var prompt = require('prompt-sync')();

let num = Number(prompt("valeur en decimal : "));

let binary = num.toString(2);
let hexadecimal = num.toString(16);

console.log("la valeur équivalente en binaire : "+ binary);
console.log("la valeur équivalente en hexadecimal : "+ hexadecimal);