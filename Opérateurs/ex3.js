// Challenge 3 : Opérateurs d'Affectation :

var prompt = require('prompt-sync')();

let A = prompt("nombre A :");
let B = prompt("nombre B : (B>0)");

A += B ;
console.log({A});
A -= B ;
console.log({A});
A *= B ;
console.log({A});
A /= B ;
console.log({A});