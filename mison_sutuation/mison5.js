function invers_mts(mot) {
    let text = "";
    for (let i = mot.length - 1; i >= 0; i--) {
        text += mot[i]
    }
    return text
}


let name = ["yassine", "arbi", "anas"]
for (i = 0; i < name.length; i++) {
    name[i] = invers_mts(name[i])
}

console.log({name})