function any(text){
    if(typeof(text) === "number"){
        console.log("meme age")
        for(let i=0 ; i< data.length ; i++ ){
            if(data[i].age === text){
                console.log(data[i])
            }
        }  
    }else if(typeof(text) === "string"){
                console.log("meme ville")
        for(let i=0 ; i< data.length ; i++ ){
            if(data[i].ville === text){
                console.log(data[i])
            }
        } 
    }else{
        console.log("not found")
    }
}


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

let a = 18
let s = "safi"

any(a)
any(s)
any(["$$ù$", "zert"])