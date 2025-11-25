// Ejercicio 7


const readLine = require("readline-sync")
const heigth = readLine.question("Introduce una altura para su triangulo: ")

let n = Number(heigth)
let negative

if (n === 0){
    console.log("¡Es imposible dibujar un triangulo sin altura!")
    return
} else if(n === 1 || n === (-1)){
    console.log("* Vaya triangulo más aburrido")
    return
}
 else if(n < 0){
    negative = true
    n = n * (-1)
 }
 
let base = n + (n-1)

if (negative !== true){
    for (let i = 0; i < n; i++) {
        let numAsteriscos = 1 + (i * 2)
        let numEspacios = (base - numAsteriscos) / 2
        let linea = " ".repeat(numEspacios) + "*".repeat(numAsteriscos) + " ".repeat(numEspacios)
        console.log(linea);
    }
} else {
    for (let i = n - 1; i >= 0; i--){
        let numAsteriscos = 1 + (i * 2)
        let numEspacios = (base - numAsteriscos) / 2
        let linea = " ".repeat(numEspacios) + "*".repeat(numAsteriscos) + " ".repeat(numEspacios)
        console.log(linea)
    }
}
