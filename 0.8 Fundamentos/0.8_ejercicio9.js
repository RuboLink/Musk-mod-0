const readLine = require("readline-sync")
const sequence = readLine.question("Introduzca una secuencia: ")

function checkBalance(sequence){

    let pila = []

    for(i = 0; i < sequence.length; i++){
        if(sequence[i] === "("){
            pila.push(sequence[i])
            console.log(`Se abre paréntesis en posición ${i}, pila: ${pila}`)
        } else if (sequence[i] === ")"){
            if(pila.length === 0){
                console.log("Hay paréntesis sin cerrar. No están balanceados")
                return false
            }
            pila.pop()
            console.log(`Se cierra paréntesis en posición ${i}, pila: ${pila}`)
        }
    }
    if(pila.length === 0){
        console.log("Todos los parentesis están balanceados")
        return true
    } else {
        console.log("Hay paréntesis sin cerrar. No están balanceados")
        return false
    }

}

checkBalance(sequence)