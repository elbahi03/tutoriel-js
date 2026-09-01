// Challenge 4 :  Conversion de la vitesse :

var prompt = require('prompt-sync')();

let Km = prompt("la vitesse en kilomètres par heure (km/h) : ")
let m = Km * 0.27778 ;

console.log("la vitesse en mètres par seconde (m/s) : ");
console.log({m});
