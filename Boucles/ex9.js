// Challenge 9 : Compteur de Chiffres

var prompt = require('prompt-sync')();

let number = Number(prompt("nombre :"));
let i = 0 ;
while( number != 0){
    i++ ;
    number = Math.floor(number / 10);
}
console.log("Compteur de Chiffres : "+ i);
