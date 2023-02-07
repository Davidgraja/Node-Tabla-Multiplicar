//? forma de requerir paquetes , en este caso el paquete fs , para el manejo FileSystem 

//? forma de requerir paquetes antes de ES6
const fs = require('fs');

//? forma de requerir de la llegada  de ES6 , para que funcione por medio del import , hay que configurar el package.json y estipular el type en "module" 
//* import { writeFile } from 'node:fs'  


const createTable = async (numBase) =>{
    
    if( !numBase ) throw new Error('Es necesario añadir algun numero');

    console.log('===================');
    console.log(`  Tabla del ` +  numBase  );
    console.log('===================');


    let salida = '';
    for(let num = 1 ; num <= 10 ; num++ ){
        salida += `${numBase} * ${num} = ${ numBase * num }\n`;
    }

    /**
     * 
        escribir archivo con callbacks:

        fs.writeFile(`tabla-${numBase}.txt` , salida , (err)=>{
            if(err) throw err
            
            console.log(`tabla-${numBase}.txt creado`);
        })
     */


    //? escritura de un archivo de forma asincrona
    try {
        fs.writeFileSync(`tabla-${numBase}.txt` , salida );
        return `tabla-${numBase}.txt creada`;
        
    } catch (error) {
        throw  error.message;
    }

}



module.exports = { 
    createTable
}