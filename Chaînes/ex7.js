// Challenge 7 : Conversion en Majuscules

var prompt = require('prompt-sync')();

let text = prompt("entrer text  : ");
let new_text = ""

for (let i = 0; i < text.length; i++) {
    let ACII = text.charCodeAt(i)
    if ((ACII >= 97) && (ACII <= 122)) {
        ACII -= 32;
        const Maj = String.fromCharCode(ACII);
        // text[i] = text.replace(k, Maj);
        new_text += Maj;
    }else {
        new_text += text[i];
    }
}
text = new_text ;
console.log({ text });