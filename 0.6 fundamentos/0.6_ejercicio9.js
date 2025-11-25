// Ejercicio 9

const readLine = require("readline-sync")
let numToString = ["Uno","Dos","Tres","Cuatro","Cinco","Seis","Siete","Ocho","Nueve","Diez"]

function askForNumber() {
    while (true) {
        const input = readLine.question("Introduce un número del 1 al 10: ")
        const number = Number(input)

        
        if (!Number.isInteger(number)) {
            console.log("Eso no parece un número. Inténtalo de nuevo.")
            continue
        }

        if (number >= 1 && number <= 10) {
            console.log(`Has elegido: ${numToString[number - 1]}`)
            break
        } else {
            console.log("El número debe estar entre 1 y 10. Inténtalo de nuevo.")
        }
    }
}

askForNumber()
