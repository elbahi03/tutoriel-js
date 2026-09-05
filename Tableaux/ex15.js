// Challenge 15 : Fusion de Deux Tableaux


var prompt = require('prompt-sync')();

let num1 = Number(prompt("number of tableu : "));
let tableau1 = [];
let num2 = Number(prompt("number of tableu : "));
let tableau2 = []; 

for (let i = 0; i < num1; i++) {
    tableau1[i] = Number(prompt("tableu1  " + i + ": "));
}

for (let i = 0; i < num2; i++) {
    tableau2[i] = Number(prompt("tableu2  " + i + ": "));
}

let table_final = [] ;
table_final = tableau1 ;

for (let i = tableau1.length ; i < num1 + num2  ;i++) {
    table_final [i] = tableau2 [ i - num1 ];
}
console.log(table_final)