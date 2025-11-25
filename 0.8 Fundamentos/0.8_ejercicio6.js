const readLine = require("readline-sync")
const cantidad = readLine.question("Elija la cantidad de números a ordenar: ")


const numerosAleatorios = []

for (let i = 0; i < cantidad; i++) {
  numerosAleatorios.push(Math.random() * 1000)
}

function ordenNumeros(numerosAleatorios){

    let a = numerosAleatorios.length
    let swapped
    console.time("Tiempo de ejecución del programa")
    console.log("El programa ha comenzado a ejecutarse")
    do {
        swapped = false
        for (let i = 0; i < a - 1; i++) {
            if (numerosAleatorios[i] > numerosAleatorios[i + 1]) {
                [numerosAleatorios[i], numerosAleatorios[i + 1]] = [numerosAleatorios[i + 1], numerosAleatorios[i]]
                swapped = true
            }
        }
        a--
    } while (swapped)

console.timeEnd("Tiempo de ejecución del programa")
console.log(`El programa ha terminado de ejecutarse`)

}

ordenNumeros(numerosAleatorios)