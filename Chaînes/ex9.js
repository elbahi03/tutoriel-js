// Challenge 9 : Suppression des Espaces

var prompt = require('prompt-sync')();

let text = prompt("entrer text  : ");

let new_text = "";

for (let i = 0; i <= text.length - 1; i++) {
    if (text[i] != "") {
        new_text += text[i];
    } else {
        continue
    }
}

text = new_text;

console.log({ text });