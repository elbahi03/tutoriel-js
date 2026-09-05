// Challenge 9 : Inversion d'un Tableau

var prompt = require('prompt-sync')();

let num = Number(prompt("number of tableu : "));
let tableu = [];

for (let i = 0; i < num; i++) {
    tableu[i] = Number(prompt("tableu  " + i + ": "));
}
console.table(tableu);
for (let i = 0; i < Math.floor((num)/2); i++) {
    let a = tableu[i] ;
    tableu[i] = tableu[num -1  - i] ;
    tableu[num - 1 -i] = a;
}

console.table(tableu);