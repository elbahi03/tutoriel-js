// Challenge 3 : Somme des Éléments

var prompt = require('prompt-sync')();

let nums = [];
let somme = 0;
let num = Number(prompt("nombre de entier : "));

for (let i = 0; i < num; i++) {
    nums[i] = Number(prompt("N(" + i + ") = "));
    somme += nums[i] ;
}

console.log("la somme : "+ somme);