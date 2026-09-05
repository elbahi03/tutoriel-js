// Challenge 11 : Remplacer un Élément

var prompt = require('prompt-sync')();

let num = Number(prompt("number of tableu : "));
let tableau = [];

for (let i = 0; i < num; i++) {
    tableau[i] = Number(prompt("tableu  " + i + ": "));
}

for (let i = 0; i < num; i++) {
    console.log("old valeur : tableau["+ i +"] = "+tableau[i]);
    tableau[i] = Number(prompt("tableu  " + i + ": "));
}

for (let i = 0; i < num; i++) {
    console.log("new valeur : ")
    console.log("tableau["+ i +"] = "+tableau[i]);
}