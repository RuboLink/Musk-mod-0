const readLine = require("readline-sync")
const cantidad = readLine.question("Elija la cantidad de números a ordenar: ")

const arrayNumeros = []
console.time("El programa ha tardado en ejecutarse: ")
for(let i = 0; i < cantidad; i++){
    arrayNumeros.push(Math.floor(Math.random() * 1000))
}

function quickSort(arrayNumeros){
    if(arrayNumeros.length <= 1){
        return arrayNumeros
    }
    
    let pivote = arrayNumeros[Math.floor(arrayNumeros.length / 2)]
    let left = []
    let right = []


    for (let j = 0; j < arrayNumeros.length; j++){
        if(arrayNumeros[j] === pivote){
            continue
        }
        arrayNumeros[j] < pivote ? left.push(arrayNumeros[j]) : right.push(arrayNumeros[j])    
    }
    
    return [...quickSort(left), pivote, ...quickSort(right)]

}

console.log(quickSort(arrayNumeros))
console.log(arrayNumeros)
console.timeEnd("El programa ha tardado en ejecutarse: ")