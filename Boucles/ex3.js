// Challenge 3 : Opérateurs d'Affectation

 var prompt = require('prompt-sync')();

let num = Number(prompt("value of num : "));
let resultat = 1 ;
let resultat2 = 1 ;
let resultat3
let rus = 0 ;
for (let i = 1 ; i <=num ; i++ ){
    resultat *= i ; 
    resultat2 /= i ;
    resultat3 -=i ;
    rus += i ;
}
console.log("La factorielle de "+ num);

console.log({resultat});
console.log({resultat2});
console.log({resultat3});
console.log({rus});


