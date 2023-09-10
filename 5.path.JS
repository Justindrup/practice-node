const path = require('node:path');

// devuelve barra de separación del sistema operativo
console.log(path.sep)

// unir y crear rutas con path.join
const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath)

// devuelve el nombre del archivo
const   base = path.basename('/Users/Shared/sites/formacion/node-practice/archivo.txt')
console.log(base)

// devuelve el nombre del archivo sin la extensión
const filename = path.basename('/Users/Shared/sites/formacion/node-practice/archivo.txt', '.txt')
console.log(filename)

// devuelve la extensión del archivo
const extension = path.extname('/Users/Shared/sites/formacion/node-practice/archivo.txt')
console.log(extension)


// Devuelve la ruta absoluta del archivo
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)

const pathForParse = '/Users/Shared/sites/formacion/node-practice/content/subfolder/test.txt';
console.log(path.parse(pathForParse))