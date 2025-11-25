const readLine = require("readline-sync")
let palabra = readLine.question("Introduce una palabra: ")

function stackWord(palabra){

    let stackArray = []
    let stackInvertido = []
    let longitud = palabra.length

    for(let i = 0; i < palabra.length; i++){
        stackArray[i] = palabra[i]
    }
    for(i = 0; i < longitud; i++){
        stackInvertido[i] = stackArray.pop()
    }
    console.log(stackInvertido)
}

stackWord(palabra)