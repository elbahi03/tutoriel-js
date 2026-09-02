// Challenge 1 : Table de Multiplication Inversée :

var prompt = require('prompt-sync')();

let num = Number(prompt("value of num : "));

for ( i=10 ; i>=0 ; i-- ){
    console.log(num +" * "+ i +" = "+ i*num); 
}