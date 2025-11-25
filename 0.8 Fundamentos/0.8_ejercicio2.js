const readLine = require("readline-sync")
const in1 = readLine.question("Array 1: ")
const in2 = readLine.question("Array 2: ")


function comparativaArrays(in1, in2){

    let array1 = in1.split(",").map(Number)
    let array2 = in2.split(",").map(Number)

    let resultado = []

    for(a of array1){
        if(isNaN(a) || array2.includes(a)){
            continue
        } else {
            resultado.push(a)
        }
    }
    return resultado
}

console.log(comparativaArrays(in1, in2))
