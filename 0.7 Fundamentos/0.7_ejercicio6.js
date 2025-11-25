const readLine = require("readline-sync")
const num = readLine.question("Introduce el tamaño de la matriz cuadrada: ")
const valor = Number(num)

const totalMatrix = []
const partialMatrix = []
let counter = 0
let innerCounter = 0
function matrix(valor){
    while (counter != valor){
        for (n = 0; n < valor; n++){
            partialMatrix[n] = innerCounter + 1
            innerCounter++
        }
        totalMatrix[counter] = [...partialMatrix]
        counter ++
        innerCounter = partialMatrix[valor-1]
    }
    
    return totalMatrix
}

console.log(matrix(valor))