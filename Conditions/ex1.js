// Challenge 1 : Paire ou Impaire

var prompt = require('prompt-sync')();

let num = Number(prompt("valeur de num : "));

if ( num % 2 == 0 ){
    console.log("num est pair");
}else{
    console.log("num est impair");
}
