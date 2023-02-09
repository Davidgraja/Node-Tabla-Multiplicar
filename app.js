const { createTable }  = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();

/**
    forma de recibir arguementos por medio de la consola  : esto lo podemos hacer de varias formas 
    //? 1:  la menos recomentada , pero es una forma de entende como obtener los argumentos enviados por consola , esto lo hacemos por medio de process.argv
 **/

// const [, , arg3 = 'base=5' ] = process.argv;
// const [, base = 5 ] = arg3.split('=');


// createTable(base)
//     .then(message => console.log(message))
//     .catch(error => console.log(error))


/**
 * 
    //? la segunda forma es por medio del paquete yargs , este paquete ya trae implementado funcionalidades que podemos usar , una de estas es el poder acceder a los argumentos enviados por consola 
 */


createTable(argv.b , argv.l , argv.h)
   .then(message => console.log(message))
   .catch(error => console.log(error))
