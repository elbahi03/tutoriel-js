// Challenge 5 : Affichage Température :

var prompt = require('prompt-sync')();

let C = prompt("la température en Celsius : ")

if ( C < 0 )  {
    console.log("l'état de l'eau : Solide");  
}
else if ( 0 < C && C < 100){
    console.log("l'état de l'eau : Liquide");   
}
else if ( C >= 100){
    console.log("l'état de l'eau : Gaz");
}
