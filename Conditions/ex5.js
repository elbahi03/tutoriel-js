// Challenge 5 : Conversion d'Année

var prompt = require('prompt-sync')();

let num = Number(prompt("num de annees : "));
let Mois = num * 12 ;
let jours = num * 365 ;
let heures = jours * 24 ;
let munitess = heures * 60 ;
let secondes = munitess * 60 ;

console.log({Mois});
console.log({jours});
console.log({heures});
console.log({munitess});
console.log({secondes});
