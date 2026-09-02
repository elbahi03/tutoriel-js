//Challenge 5 : Calcul de la Puissance

var prompt = require('prompt-sync')();

let base = Number(prompt("nombre base :"));
let exposant = Number(prompt("nombre exposant :"));
let resultat = 1 ;
for(let i=1 ; i<=exposant ; i++){
    resultat *= base ; 
}
console.log("puisance : "+ resultat);
