const readLine = require("readline-sync")
let palabra1 = readLine.question("Introduce una palabra: ")
let palabra2 = readLine.question("Introduce otra palabra: ")

function checkAnagram(palabra1, palabra2){
    if(palabra1.length !== palabra2.length){
        return "No son anagramas"
    }
    
    let map1 = new Map()
    
    for(letra of palabra1){
        let counter = 0
        for(letra2 of palabra2){
            if (letra === letra2){
                counter++
            }
        }

        map1.set(letra, counter)
    }
    
    counter = 1

    for(valor of map1.values()){
        console.log(counter)
        if(valor !== 1){
            return "No son anagramas"
        } else if(counter === map1.size){
            return "Son anagramas"
        }
        counter++
        console.log(map1.size)
        console.log(valor)
    }

}

console.log(checkAnagram(palabra1, palabra2))