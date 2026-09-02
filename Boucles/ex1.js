// Challenge 1 : Table de Multiplication :

var prompt = require('prompt-sync')();

let num = Number(prompt("value of num : "));

for (let i = 1 ; i <=10 ; i++ ){
    console.log(num + " * "+i +" = "+ num*i);  
}