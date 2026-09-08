let tab = [4, 7, 2, 4, 9, 7, 2, 10, 4];
let T = []
for (let i = 0; i < tab.length; i++) {
    let index = 0
    let trouve = false
    for (let j = 0; j < tab.length; j++) {
        if (tab[i] === tab[j]) {
            index++;
        }
    }
    if (T.length === 0) {
        T[0] = tab[i]
    }
    for (let k = 0; k < T.length; k++) {
        if (tab[i] === T[k]) {
            trouve = true
        }
    }
    let L = T.length;
    if (index >= 2 && trouve === false) {
        T[L] = tab[i]
    }
}

console.log(T)