// Challenge 1 : Affichage Informations :

var prompt = require('prompt-sync')();

let nom = prompt("votre nom : ")
let premon = prompt("votre prenom : ")
let age = prompt("votre age : ")
let sexe = prompt("homme / femme : ")
let mail = prompt("votre mail : ")

console.log("votre infos :")
console.log('nom ', {nom})
console.log('prenom', {premon})
console.log('age', {age})
console.log('sexe', {sexe})
console.log('adress', {mail})