// Ejercicio 3

const readLine = require("readline-sync")
const num = readLine.question("Introduce un número: ")
console.log(factorial(num))


function factorial(num) {
    if (num < 0) { return undefined }
    let resultado = 1
    for (let a = 2; a <= num; a++) {
        resultado *= a
    }
    return resultado
}



