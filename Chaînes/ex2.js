// Challenge 2 : Longueur de la Chaîne : 

var prompt = require('prompt-sync')();

let text =prompt("entrer text  : ");

let i = 0;
while (text[i] != null ){
    i++;
}

console.log("lengeur de text est : ", i);