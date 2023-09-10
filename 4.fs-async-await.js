//en common js no se puede usar await en el cuerpo del archivo
// esto sí se puede hacer en ecmascript modules
// para hacerlo en common js se usa una función auto invocada




const { readFile } = require('node:fs/promises')

// IIFE - Inmediately Invoked Function Expression
;(
    async() => {
        console.log("***********************")
        console.log("leyendo el primer archivo")
        console.log("***********************")

        const text = await readFile('./archivo.txt', 'utf-8')

        console.log("primer texto: ", text)




        console.log("------->hacer cosas mientras se lee el archivo")


        console.log("***********************")
        console.log("leyendo el segundo archivo")
        console.log("***********************")

        const text2 = await readFile('./archivo2.txt', 'utf-8')
        console.log("segundo texto: ", text2)

    }
)()



