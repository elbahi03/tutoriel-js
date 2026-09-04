// Challenge 6 : Compte des Occurrences d'un Caractère

var prompt = require('prompt-sync')();

let text =prompt("entrer text  : ");
let car = prompt("centrer un alphabet : ");

while(car.length !=1){
     car = prompt("centrer un alphabet : ");
}
let count =0 ;
for( let i=0 ; i<=text.length-1 ; i++ ){
    if ( text[i] == car ){
        count++;
    }
}

console.log(" combien de fois le caractère apparaît dans la chaîne : "+ count)