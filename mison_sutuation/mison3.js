let T = [1, 2, 3, 1, 6, 7, 8, 5, 6]

let index = 0
let index_two = 0
let j = 0;
for (i = 0; i < T.length; i++) {
    if (T[i] < T[i + 1]) {
        index_two++
    } else {
        if (index < index_two) {
            index = index_two
            j = i
        }
        index_two = 0
    }
}

let t = [];

for (let i = j - index; i <= j; i++) {
    t.push(T[i])
}
console.log(t)
