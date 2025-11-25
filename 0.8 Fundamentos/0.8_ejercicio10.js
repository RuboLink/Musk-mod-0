const readLine = require("readline-sync")
const sequence = readLine.question("Introduzca una secuencia: ")

function checkSequence(sequence){
    
    let pila = []
    let count = 0

    for(i = 0; i < sequence.length; i++){
        if(sequence[i] === "(" || sequence[i] === "[" || sequence[i] === "{"){
            pila.push(sequence[i])
            count ++
            console.log(`Se abre en la posición ${i} Pila: ${pila}`)
        } else if (sequence[i] === ")" || sequence[i] === "]" || sequence[i] === "}"){
            if(pila[count - 1] === "(" && sequence[i] === ")"){
                pila.pop()
                count--
                console.log(`Se ha cerrado un paréntesis en la posición ${i} Pila: ${pila}`)
            } else if(pila[count - 1] === "[" && sequence[i] === "]"){
                pila.pop()
                count--
                console.log(`Se ha cerrado un corchete en la posición ${i} Pila: ${pila}`)
            } else if(pila[count - 1] === "{" && sequence[i] === "}"){
                pila.pop()
                count--
                console.log(`Se ha cerrado una llave en la posición ${i} Pila: ${pila}`)
            } else {
                console.log("La secuencia no está balanceada")
                return false
            }
        }
    }
    if(pila.length === 0){
        console.log("La secuencia está balanceada y correcta")
        return true
    } else {
        console.log("La secuencia no está balanceada y algúna frase no se cierra bien")
        return false
    }
}

checkSequence(sequence)