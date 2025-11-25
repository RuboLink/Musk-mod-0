const readLine = require("readline-sync")
let palabra1 = readLine.question("Introduce una palabra: ")
let palabra2 = readLine.question("Introduce otra palabra: ")

function checkAnagram(palabra1, palabra2){

    palabra1 = palabra1.replace(/ /g, "")
    palabra2 = palabra2.replace(/ /g, "")

    if(palabra1.length !== palabra2.length){
        return "No son anagramas"
    }
    
    let map1 = new Map()
    
    for(letra of palabra1){
        let counter = 0
        for (i = 0; i < palabra1.length; i++){
            if(letra === palabra1[i]){
                counter++
            }
        }
        map1.set(letra, counter)
    }
    
    let map2 = new Map()
    
    for(letra of palabra2){
        let counter = 0
        for (i = 0; i < palabra2.length; i++){
            if(letra === palabra2[i]){
                counter++
            }
        }
        map2.set(letra, counter)
    }

    console.log(map1, map2)
    counter = 1

    for(valor of map1.keys()){
        if(map2.get(valor) !== map1.get(valor)){
            return "No son anagramas"
        }
    }

    return "Son anagramas"

}

console.log(checkAnagram(palabra1, palabra2))
