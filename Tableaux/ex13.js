// Challenge 13 : Afficher les Éléments Impairs

var prompt = require('prompt-sync')();

let num = Number(prompt("number of tableu : "));
let tableau = [];

for (let i = 0; i < num; i++) {
    tableau[i] = Number(prompt("tableu  " + i + ": "));
}

for (let i = 0; i < num; i++) {
    if (tableau[i] % 2 != 0) {
        console.log(tableau[i])
    }
}