const readLine = require("readline-sync")
const frase = readLine.question("Introduce un texto: ")

function isItPalindrome(frase){
    const fraseMinusculas = frase.toLowerCase()
    const fraseSinEspacios = fraseMinusculas.split(" ").join("")
    let array = fraseSinEspacios.split("")
    let fraseInvertida = array.reverse("").join("")
    
    if (fraseInvertida === fraseSinEspacios){
        console.log("Es un palíndromo")
    } else {
        console.log("No es un palíndromo")
    }
}

isItPalindrome(frase)