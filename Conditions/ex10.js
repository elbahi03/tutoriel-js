// mison sutuation 

var prompt = require('prompt-sync')();

let A = Number(prompt("nombre A :"));
let B = Number(prompt("nombre B :"));
let C = Number(prompt("valeur C :"));

if ( ( A+B > C ) && ( A+C > B ) && ( B+C > A )){
    if( A === B && B ===C && A ===C ){
        console.log("motalat motasawi adla3");
    }else if ( (( A === B )) || ( (B ===C) ) || ( (A === C))){
        console.log("motalat motasawi sa9ayn");
    }else {
        console.log("motalat 3adi");
    }
}else {
    console.log("maxi motalat");
}
 
