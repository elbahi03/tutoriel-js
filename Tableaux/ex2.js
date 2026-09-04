// Challenge 2 : Saisie et Affichage des Éléments :
var prompt = require('prompt-sync')();

let nums = [];
let num = Number(prompt("nombre de entier : "));

for (let i = 0; i < num; i++) {
    nums[i] = Number(prompt("N(" + i + ") = "));
}

for (let numm of nums) {
    console.log(numm);
}