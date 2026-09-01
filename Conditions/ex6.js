// Challenge 6 : Positif, Négatif ou Nul :

var prompt = require('prompt-sync')();

let num = Number(prompt("num : "));
if (num > 0 ){
    console.log("number positif");
}else if (num < 0 ){
    console.log("number negatif");
}else {
    console.log("number null");
}