// Ejercicio 5

const readLine = require("readline-sync")
const num = readLine.question("Introduce una cadena de texto: ")

let count = 0
let useString = num.toLowerCase()


for(let a of useString){
    if("aeiou".includes(a) === true){
        count++
    }
}
console.log(`Esta frase tiene ${count} vocales`)

