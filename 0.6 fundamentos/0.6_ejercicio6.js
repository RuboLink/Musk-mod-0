// Ejercicio 6

const readLine = require("readline-sync")
const year = readLine.question("Introduce un año: ")

let check = Number(year)
function bisiesto(){
    console.log(`${check} es un año bisiesto`)
}
function noBisiesto(){
    console.log(`${check} no es un año bisiesto`)
}

if(check < 100) {
    if(check % 4 === 0){
        bisiesto()
    } else {
        noBisiesto()
    }
} else {
    if(check % 100 === 0 && check % 400 !== 0){
        noBisiesto()
    } else if (check % 100 !== 0 && check % 4 === 0){
        bisiesto()
    } else if (check % 400 === 0){
        bisiesto()
    } else {
        noBisiesto()
    }
}