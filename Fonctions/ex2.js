// Challenge 2 : Fonction de Multiplication

function Produit(a,b){
    return a*b ;
}

var prompt = require('prompt-sync')();

let num1 = Number(prompt("valeur de num 1 : "));
let num2 = Number(prompt("valeur de num 2 : "));

console.log(" le produit de deux nombres : "+ Produit(num1 , num2));