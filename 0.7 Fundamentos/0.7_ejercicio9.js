const readLine = require("readline-sync")
const matriz = readLine.question("Introduce el tamaño de la matriz cuadrada: ")
let matriz2 = Number(matriz)

function productoIndices(matriz2){
    let arrayY = []
    let arrayX = []
    let demiMatrix = []
    let counter = 0
    let demiArray = []
    
    while (counter !== matriz2){
        for (i = 0; i < matriz2; i++){
            arrayX[i] = counter
            arrayY[i] = i
            demiArray[i] = arrayX[i] * arrayY[i]
        }
    
    demiMatrix[counter] = demiArray
    demiArray = []
    counter++
    }
    console.log(demiMatrix)
    
}

productoIndices(matriz2)