const readLine = require("readline-sync")
let texto = readLine.question("Introduce un texto: ")


function frecuenciaLetras(texto){
    
    let mapaFrecuencias = new Map()
    let textoSet
    

    texto = texto.toLowerCase()
    texto = texto.replace(/[(?¿)`' ¡!,.]/g, "")
    
    texto = texto.split("")
    console.log(texto)
    textoSet = new Set()
    for(letra of texto){
        textoSet.add(letra)
    }
    for (keyWord of textoSet){
        let count = 0
        for(let i = 0; i < texto.length; i++){
            if(texto[i] === keyWord){
                count++
            }
        }
        mapaFrecuencias.set(keyWord, count)
    }
    console.log(mapaFrecuencias)
    
}

frecuenciaLetras(texto)