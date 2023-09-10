const fs = require('node:fs');

// si no ponemos utf-8, nos devuelve un buffer

console.log("***********************")
console.log("leyendo el primer archivo")
console.log("***********************")

const text = fs.readFileSync('./archivo.txt', 'utf-8');


console.log(text)

console.log("hacer cosas mientras se lee el archivo")


console.log("***********************")
console.log("leyendo el segundo archivo")
console.log("***********************")

const text2 = fs.readFileSync('./archivo2.txt', 'utf-8')

console.log(text2)
