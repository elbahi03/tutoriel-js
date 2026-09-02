// numbre premier :

var prompt = require('prompt-sync')();

let num = Number(prompt("value of num : (n>=2) :"));
let k = 0;
for (let i = 2; i < num; i++) {
    if (num % i == 0) {
        k++
        console.log("not");
        break;
    }
}
if (k == 0) {
    console.log("premier");
}
