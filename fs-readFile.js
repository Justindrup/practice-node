const fs = require('node:fs');

// si no ponemos utf-8, nos devuelve un buffer
const text = fs.readFileSync('./archivo.txt', 'utf-8');


console.log(text)