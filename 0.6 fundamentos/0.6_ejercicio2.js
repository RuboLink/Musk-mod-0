// Ejercicio 2

const readLine = require("readline-sync")
const a = readLine.question("Introduce un número: ")
const b = readLine.question("Introduce un número: ")
const c = readLine.question("Introduce un número: ")


let check = 0

let array = [a, b, c]

for (n of array) {
    if (n % 2 === 0) {
        check++
    }
}
if (check === 0) {
    console.log("No hay números pares")
} else {
    console.log("Hay al menos un número par")
}
