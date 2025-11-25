// Ejercicio 1

const readLine = require("readline-sync")
const num = readLine.question("Introduce un número: ")

let userInputNumber = Number(num)

const zero = "0 no es ni par ni impar. Tampoco positivo o negativo"
const even = "El resultado es par"
const odd = "El resultado es impar"
const negative = "y negativo"
const positive = "y positivo"
const integer = "Por favor, introduzca un número entero"
const nan = "No es un número"
let a
let b

if (typeof userInputNumber !== "number"){
        a = nan
    } else if(Number.isInteger(userInputNumber) === false){
        a = integer
    } else if(userInputNumber === 0) {
        a = zero
    } else if(userInputNumber % 2 === 0) {
        a = even
    } else {
        a = odd
    }

if(userInputNumber < 0) {
        b = negative
    } else if(userInputNumber > 0) {
        b = positive
    }
    
if (typeof b === "undefined" || Number.isInteger(userInputNumber) === false){
    console.log(a)
    } else {
    console.log(`${a} ${b}`)
    }






    
