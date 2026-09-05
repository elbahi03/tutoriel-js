// Challenge 8 : Copie d'un Tableau

var prompt = require('prompt-sync')();

let num = Number(prompt("number of tableu : "));
let tableu = [];
let copier_tableu = [];

for (let i = 0; i < num; i++) {
    tableu[i] = Number(prompt("tableu  " + i + ": "));
    copier_tableu[i] = tableu[i] ;
}

for (let i = 0; i < num; i++) {
    console.table("tableu ["+ i +"] = "+tableu[i]);
}

for (let i = 0; i < num; i++) {
    console.table("copier tableu ["+ i +"] = "+ copier_tableu[i]);
}