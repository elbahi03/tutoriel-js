 // Challenge 2 : Factorielle d'un Nombre

 var prompt = require('prompt-sync')();

let num = Number(prompt("value of num : "));
let resultat = 1 ;
for (let i = 1 ; i <=num ; i++ ){
    resultat *= i ; 
}
console.log("La factorielle de "+ num);

console.log({resultat});
