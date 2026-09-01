// Challenge 2 : Voyelle ou Non :
var prompt = require('prompt-sync')();

let car = prompt("entrer un alphabet : ");
switch(car){
    case "a" , "e" , "u" , "y" , "i", "o" :
        console.log("Voyelle");
        break;
    
    default :
        console.log("non");
}