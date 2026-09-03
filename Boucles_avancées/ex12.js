// Challenge 12 : Tri par Bulles

var prompt = require('prompt-sync')();

let num = Number(prompt("number of tableu : "));
let tableu = [];
for (let i = 0; i < num; i++) {
    tableu[i] = Number(prompt("tableu  " + i + ": "));
}

for (let j = 0; j < tableu.length - 1; j++) {
    for (let index = tableu.length - 1; index >= 0; index--) {

        if (j != index) {
            console.log(j, index);
            if (tableu[j] > tableu[index]) {
                let a = tableu[j];
                tableu[j] = tableu[index];
                tableu[index] = a;
            } else {
                continue;
            }
        } else {
            break;
        }
    }
}

console.table(tableu)
