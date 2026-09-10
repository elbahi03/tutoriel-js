let data = [
    {
        ville: "safi",
        age: 18
    },
    {
        ville: "casablanca",
        age: 20
    },
    {
        ville: "safi",
        age: 15
    },
    {
        ville: "safi",
        age: 25
    },
    {
        ville: "rabat",
        age: 50
    },
    {
        ville: "safi",
        age: 3
    },
]



for(i=0 ; i <= data.length -1 ; i++ ){
    if(data[i].ville === "safi" && data[i].age >= 18){
        console.log("ville :" + data[i].ville)
        console.log("age :", data[i].age)
        console.log("------------------")
    }
}