const os =  require('node:os');


console.log(os.platform());
console.log(os.homedir());
console.log(os.hostname());
console.log(os.cpus())

console.log('Información del sistema operativo')
console.log("---------------------")
console.log("Nombre del sistema operativo: ", os.platform())
console.log("Version del sistema operativo: ", os.release())
console.log("Memoria total del sistema operativo: ", os.totalmem() / 1024 /1024 )
console.log("HomeDir",os.homedir());
console.log(os.hostname());
console.log("CPUS: ",os.cpus())
console.log("uptime",os.uptime()) /  60 /60

console.log("---------------------")


