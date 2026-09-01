// Challenge 7 : Calcul de Réduction

var prompt = require('prompt-sync')();

let prix  = prompt("prix : ");
let pourcentage = prompt("pourcentage : ");

let réduction = prix * ( pourcentage/100 );
let prix_final = prix - réduction ;

console.log("le montant de la réduction : "+ réduction);
console.log("le prix final : "+ prix_final);

