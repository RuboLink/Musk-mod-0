const readLine = require("readline-sync")
let numero = readLine.question("Introduce un número: ")



function isAnumber(numero){
    numero = Number(numero)
    while (isNaN(numero)){
        numero = readLine.question("Por favor, introduce un número: ")
    }
        return numero
}


function primo(numero){

    numero = isAnumber(numero)

    if(numero < 2){
        console.log(`${numero} no es primo`)
        return
    }
    
    for(let i = 2; i <= Math.sqrt(numero); i++){
        if(numero % i === 0){
            console.log(`${numero} no es primo`)
            return
        }
    }

    console.log(`${numero} es un número primo`)

}

primo(numero)