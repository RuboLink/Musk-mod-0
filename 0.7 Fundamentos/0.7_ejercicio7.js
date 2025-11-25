const readLine = require("readline-sync")
const frase = readLine.question("Introduce un texto: ")


function biMatrix(frase){
    let demiMatrix = []
    let spacedPhrase = []
    let fullMatrix = []
    let counter = 0
    let innerCounter = 0
    let outCounter = 0
    
    spacedPhrase = frase.split(' ')
    
    do{
        for(n = 0; n < 5; n++){
            if (counter < spacedPhrase.length){
                demiMatrix.push(spacedPhrase[innerCounter])
                innerCounter ++
                counter++
            }
        }
        fullMatrix[outCounter] = demiMatrix
        demiMatrix = []
        outCounter ++
        
    } while (counter < spacedPhrase.length)
    return fullMatrix
}

console.log(biMatrix(frase))