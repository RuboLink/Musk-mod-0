const readLine = require("readline-sync")
const num = readLine.question("Introduce una lista de valores: ")
const array = num.split(',')

function verificarUnicidad(array) {
  const contador = {};
  const repetidos = [];

  for (let elemento of array) {
    contador[elemento] = (contador[elemento] || 0) + 1;
  }

  for (let clave in contador) {
    if (contador[clave] > 1) {
      repetidos.push(clave);
    }
  }

  if (repetidos.length === 0) {
    console.log("Todos los elementos son únicos.");
  } else {
    console.log("Elementos repetidos encontrados:", repetidos);
  }
}
verificarUnicidad(array)
