//? forma de requerir paquetes , en este caso el paquete fs , para el manejo FileSystem

//? forma de requerir paquetes antes de ES6
const fs = require('fs');
require('colors');
//? forma de requerir de la llegada  de ES6 , para que funcione por medio del import , hay que configurar el package.json y estipular el type en "module"
//* import { writeFile } from 'node:fs'


const createTable = async (numBase , toList , unTil ) =>{

    if( !numBase ) throw new Error('Es necesario añadir algun numero');


    let salida = '';
    let consola = '';
    for(let num = 1 ; num <= unTil ; num++ ){
        salida += `${numBase} x ${num} = ${ numBase * num }\n`;
        consola += `${numBase} ${'x'.cyan} ${num} ${'='.cyan} ${ numBase * num }\n`;
    
    }

    
    /**
     *
        escribir archivo con callbacks:

        fs.writeFile(`tabla-${numBase}.txt` , salida , (err)=>{
            if(err) throw err

            console.log(`tabla-${numBase}.txt creado`);
        })
     */

    if(toList) {
        console.log('==================='.green);
        console.log(` Tabla del  ${ + numBase}`.cyan );
        console.log('===================\n'.green);

        console.log(consola);
    }

    //? escritura de un archivo de forma asincrona
    try {
        fs.writeFileSync(`./salida/tabla-${numBase}.txt` , salida );
        return `tabla-${numBase}.txt creada`.cyan;

    } catch (error) {
        throw  error.message;
    }

}

module.exports = {
    createTable
}