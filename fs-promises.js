const fs = require('node:fs/promises');

// si no ponemos utf-8, nos devuelve un buffer

console.log("***********************")
console.log("leyendo el primer archivo")
console.log("***********************")

fs.readFile('./archivo.txt', 'utf-8')
    .then(text => {
        console.log("primer texto: ", text)
    })




console.log("hacer cosas mientras se lee el archivo")


console.log("***********************")
console.log("leyendo el segundo archivo")
console.log("***********************")

fs.readFile('./archivo2.txt', 'utf-8')
    .then(text => {
        console.log("segundo texto: ", text)
    })


