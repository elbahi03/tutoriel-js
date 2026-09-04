// Challenge 10 : Trouver un Sous-String

var prompt = require('prompt-sync')();

let text = prompt("entrer text  : ");
let sou_text = prompt("entrer sous-text  : ");
let count = 0 ;
let j = 0;
for(let i=0; i<=text.length-1; i++ ){
    console.log(i, j)
    while (text[i] == sou_text[j]){
        count++ ;
        j++;   
    }
    if (count == sou_text.length){
        console.log("trouve")
        break ;
    }
    
}

if ( count != sou_text.length ){
    console.log("non trouve")
}