// Challenge 10 : Calcul de la Somme des N Entiers

var prompt = require('prompt-sync')();

let A = Number(prompt("nombre A :"));
let somme = 0
for( let i = 1 ; i<= A ; i++ ){
   somme += i ;
}

console.log({somme});
