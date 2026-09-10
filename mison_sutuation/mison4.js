let data = [
    {
        ville: "safi",
        age: 18,
        note: [12, 17, 12]
    },
    {
        ville: "casablanca",
        age: 20,
        note: [12, 17, 12]
    },
    {
        ville: "safi",
        age: 15,
        note: [14, 17, 19]
    },
    {
        ville: "safi",
        age: 25,
        note: [14, 17, 19]
    },
    {
        ville: "rabat",
        age: 50,
        note: [14, 17, 19]
    },
    {
        ville: "safi",
        age: 3,
        note: [14, 17, 19]
    },
]


for (let i = 0; i <= data.length - 1; i++) {
    data[i].moyenne = 0
    for (let j = 0; j <= data[i].note.length - 1; j++) {
        data[i].moyenne += data[i].note[j] ;
    }
    data[i].moyenne = data[i].moyenne / data[i].note.length;
}

let max = 0;

for (i = 0; i <= data.length - 1; i++) {
    if (data[i].ville === "safi" && data[i].age >= 18){
        if(max < data[i].moyenne){
            max = data[i]
        }
    }
}

console.log({max})