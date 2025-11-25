const fibonacci = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
let i = 0

for (n of fibonacci){
    fibonacci[i] *= 2
    i++
}
console.log(fibonacci)