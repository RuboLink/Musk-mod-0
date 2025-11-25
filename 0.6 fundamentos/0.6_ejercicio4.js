// Ejercicio 4

const readLine = require("readline-sync")
const num = readLine.question("Introduce un número: ")

let multiply = []


for (let n = 1; n <= 10 ; n++) {
    multiply[n-1] = n*num
    console.log(`${num} x ${n} = ${multiply[n-1]}`)
}

