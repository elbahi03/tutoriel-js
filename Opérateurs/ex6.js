// Challenge 6 : Vérification de Plage :

var prompt = require('prompt-sync')();
let num = Number(prompt("num : "));

if ( num >=10 && num <= 100 ){
    console.log("great");
}else {
    console.log("no");   
}