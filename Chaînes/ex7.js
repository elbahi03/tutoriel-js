// Challenge 7 : Conversion en Majuscules

var prompt = require('prompt-sync')();

let text = prompt("entrer text  : ");

for (let i = 0; i < text.length; i++) {
    let ACII = text.charCodeAt(i)
    if ((ACII >= 97) && (ACII <= 122)) {
        ACII -= 32;
        const Maj = String.fromCharCode(ACII);
        text = text.replace(text[i], Maj);
        console.log(text[i], Maj )
    }else {
        continue ;
    }
}
console.log({ text });