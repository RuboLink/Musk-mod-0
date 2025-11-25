const readLine = require("readline-sync")
const num = readLine.question("Introduce el radio: ")
const radius = Number(num)

let area

function calcularArea(radius){
    return console.log(area = (radius**2) * Math.PI)
}

calcularArea(radius)