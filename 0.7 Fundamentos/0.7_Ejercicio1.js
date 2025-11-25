const readLine = require("readline-sync")
const num = readLine.question("Introduce el radio: ")
const radius = Number(num)
let circunferencia

function calcularCircunferencia(radius){
    return console.log(circunferencia = 2 * radius * Math.PI)
}

calcularCircunferencia(radius)