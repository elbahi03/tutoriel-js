var prompt = require('prompt-sync')();

const user = {};

user.name = prompt("votre nom : ")
user.age = Number(prompt("votre age : "))
user.language = prompt("votre langue : ")
delete user.age;
const fieldName = "email";
user[fieldName] = "alex@example.com";  // is like user.fieldName = "alex@example.com";
console.log(user);

const numbers = [1, 2, 3, 4, 5];
const result = numbers.map(x => x * 2).filter(x => x > 5).reduce((sum, x) => sum + x, 0);
console.log(result);  // Outputs: 20