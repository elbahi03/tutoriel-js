// Challenge 11 : Surface d'un rectangle : 

var prompt = require('prompt-sync')();

let longueur = Number(prompt("valeur de longueur : "));
let largeur = Number(prompt("valeur de largeur : "));

let Surface = longueur * largeur ;

console.log("la surface d'un rectangle");
console.log(Surface);

