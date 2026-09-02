// Challenge 7 : Inversion d'un Entier

var prompt = require('prompt-sync')();

let num = Number(prompt("valeur de nombre : "));
let digital = 0 ;
let inver = 0 ;
while ( num != 0 ){
    digital = num % 10 ;
    inver = (inver * 10 ) + digital;
    num = (num - digital) / 10 ;
}

console.log(inver);