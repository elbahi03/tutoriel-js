// Challenge 14 : Calculer la Moyenne

var prompt = require('prompt-sync')();

let num = Number(prompt("number of tableu : "));
let tableau = [];
let somme = 0 ;

for (let i = 0; i < num; i++) {
    tableau[i] = Number(prompt("tableu  " + i + ": "));
    somme += tableau[i] ;
}

console.log(somme / tableau.length);