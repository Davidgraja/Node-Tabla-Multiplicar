// ? configurar basica  yargs en nuestro poryecto
const argv = require('yargs')
        .options({
            'b' : {
                alias: 'base',
                type:'number',
                demandOption : true,
                describe : 'Numero base de la multiplicación'
            },

            'l' : {
                alias:'listar',
                type:'boolean',
                default: false,
                describe:'Muestra la tabla en la consola'
            },

            'h' :{
                alias : 'hasta',
                type : 'number',
                describe : 'Numero para identificar hasta donde se hara la multiplicación',
                default :  10
            }

        })
        .check( (argv , options)=>{
            if( isNaN( argv.b ) ) throw 'La base debe de ser un numero '

            return true
        }
        )    
        .argv


module.exports = argv;