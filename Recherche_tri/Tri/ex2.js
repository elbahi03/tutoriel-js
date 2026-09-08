// Challenge 2 : Tri par Insertion

var prompt = require('prompt-sync')();

let nombres = [];
let num = Number(prompt("nombre de entier : "));

for (let i = 0; i < num; i++) {
    nombres[i] = Number(prompt("N(" + i + ") = "));
}

console.log({ nombres })

for (let i = 1; i < num; i++) {
    
    let cle = nombres[i];
    let j = i - 1;

    while (j >= 0 && nombres[j] > cle){
        nombres[j + 1] = nombres[j];
        j--;
    }

    nombres[j+1] = cle;
}

console.log({ nombres })
