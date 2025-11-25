const readLine = require("readline-sync")
const num = readLine.question("Introduce el radio: ")
const radius = Number(num)
let circunferencia
let area

function calcularCircunferenciaArea(radius){
    circunferencia = 2 * radius * Math.PI, 
    area = (radius**2) * Math.PI
    return console.log(`La circunferencia es ${circunferencia}`),console.log(`El área es ${area}`)
}

calcularCircunferenciaArea(radius)