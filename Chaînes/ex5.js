// Challenge 5 : Inversion de Chaîne

var prompt = require('prompt-sync')();

let text =prompt("entrer text  : ");

let length = text.length -1 ;

let inv_text = "";

for(let i= length ; i>=0 ; i-- ){
    inv_text += text[i];
}

console.log("la chaîne inversée : "+ inv_text);