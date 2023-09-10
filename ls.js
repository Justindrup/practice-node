const fs = require('fs');
const path = require('path');

fs.readdir('./', (err, files) => {
  if (err) {
    console.error('Hubo un error al leer el directorio:', err);
    return;
  }
  //console.log(files); // Un arreglo de nombres de archivos/directorios
  files.forEach(file => {
    fs.stat(path.join('./', file), (err, stats) => {
        if (err) {
        console.error('Hubo un error al leer el archivo:', err);
        return;
      }
      console.log(
        file,
        stats.size,
        (stats.isDirectory()) ? "dir": "",
        (stats.isFile()) ? "file": "",


        )
      // console.log(file, stats.size); // El tamaño del archivo en bytes
      // console.log(file, ); // true si es un directorio
      // console.log(file, ); // true si es un archivo
      // console.log(file, stats.isSymbolicLink()); // true si es un enlace simbálico
      // console.log(file, stats.ctime); // Fecha de creación
      // console.log(file, stats.mtime); // Fecha de modificación
      // console.log(file, stats.atime); // Fecha de Último Acceso
      // console.log(file, stats.birthtime); // Fecha de creación del archivo (Windows)
      // console.log(file, stats.dev); // NÚMERO DE DISPOSITIVO
      // console.log(file, stats.ino); //



  });
});
})


async function listFilesAndDirs(dirPath) {
    try {
        const filesAndDirs = await fs.readdir(dirPath);
        const details = [];

        for (let item of filesAndDirs) {
            let fullPath = path.join(dirPath, item);
            let stats = await fs.stat(fullPath);

            if (stats.isDirectory()) {
                details.push(`${item}/ (Directorio)`);
            } else if (stats.isFile()) {
                details.push(`${item} (Archivo)`);
            }
        }

        console.log(details);

    } catch (err) {
        console.error('Hubo un error:', err);
    }
}

listFilesAndDirs('/ruta/del/directorio');
