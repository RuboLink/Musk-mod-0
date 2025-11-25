const readLine = require("readline-sync")
const num = readLine.question("Introduce una lista de números: ")
const numberArray = num.split(',').map(Number)


function sumaYmedia(numberArray){

    let suma = 0
    numberArray.forEach(num => suma += num)
    let media = suma / numberArray.length
    
    console.log(`La suma de total es ${suma}`),console.log(`La media aritmética es ${media}`)
}

sumaYmedia(numberArray)



