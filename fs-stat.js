const fs = require('node:fs');

const stats = fs.statSync('./archivo.txt')

console.log(
    //stats.size(),
    stats.blocks,
    stats.isFile(),
    stats.isDirectory(),
    stats.isSymbolicLink(),
    stats.size
)


