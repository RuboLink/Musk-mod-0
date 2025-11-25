// Ejercicio 10

const readLine = require("readline-sync")
console.log("He pensado un número del 1 al 10. ¡Intenta adivinarlo! ")
let input
const randomNumber = Math.floor(Math.random() * 10) + 1
let count = 0

function randomCounter(input, randomNumber){
    while(true){
        input = readLine.question("Adivina: ")
        let a = Number(input)
        count++

        if(a !== randomNumber){
            console.log("¡Fallaste!")
            continue
        } else{
            console.log(`¡Lo has adivinado! Has necesitado ${count} intentos.`)
            break
            
        }
    }
}

randomCounter(input, randomNumber)