// Ejercicio 8

const readLine = require("readline-sync")
const a = readLine.question("Introduce el alto del rectangulo: ")
const b = readLine.question("Introduce el ancho del rectangulo: ")

let height = Number(a)
let width = Number(b)

for (let c = height; c >= 1; c--){
    if(c === height){
        console.log("*".repeat(width))
    } else if (c !== 1){
        console.log("*"+" ".repeat(width - 2)+"*")
    } else {
        console.log("*".repeat(width))
    }
}