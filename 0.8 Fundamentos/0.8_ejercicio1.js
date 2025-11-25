const readLine = require("readline-sync")
const frase = readLine.question("Introduce una frase: ")

let arrayFrase = []
arrayFrase = frase.toLowerCase().split(" ")

function palabrasRepetidas(arrayFrase){
    
    let repetidas = []
    let counter
    
    for(palabra of arrayFrase){
        
        counter = 0
        for(i = 0; i < arrayFrase.length; i++){
            if(arrayFrase[i] === palabra){
                counter ++
            }
        }
        
        if(counter > 1 && !repetidas.includes(palabra)){
            repetidas.push(palabra)
        }
        
    }

    if(repetidas.length === 0){
        console.log("No hay palabras repetidas")
    } else {
        console.log(`Las palabras repetidas son: ${repetidas} `)
    }
    
}

palabrasRepetidas(arrayFrase)