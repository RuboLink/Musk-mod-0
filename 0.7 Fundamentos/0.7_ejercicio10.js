let matrixIn = [[1,2,3],[4,5,6]]

function transposition(matrixIn){
    let matrixOut = []
    let counter = 0
    
    while (counter < matrixIn[0].length){
        let demiMatrix = []
        let innerCounter = 0

        for(a of matrixIn){
            demiMatrix[innerCounter] = a[counter]
            innerCounter++
        }
        matrixOut[counter] = demiMatrix
        counter++        
    }
    console.log(matrixOut)
}
transposition(matrixIn)
