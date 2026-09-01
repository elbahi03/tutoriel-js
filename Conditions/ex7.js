// Challenge 7 : Alphabet Majuscule :
var prompt = require('prompt-sync')();

let car = prompt("entre un alphabet : ");
let num = car.charCodeAt(0);
if ( num>= 65 && num<= 90 ){
    console.log("il s'agit d'un alphabet majuscule.");   
}else {
    console.log("il s'agit d'un alphabet muniscule.");   
}