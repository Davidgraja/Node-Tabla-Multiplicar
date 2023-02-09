# Creación de Tablas de Multiplicar con FileSytem :
Programa en Node que crea cualquier tabla de multiplicar , ademas de crear y guardar en FileSystem cada  una de las tablas creadas.

opciones que tiene el programa : 

```
Options:
      --help     Show help                                                          [boolean]
      --version  Show version number                                                [boolean]
  -b, --base     Numero base de la multiplicación                                   [number] [required]
  -l, --listar   Muestra la tabla en la consola                                     [boolean] [default: false]
  -h, --hasta    Numero para identificar hasta donde se hara la multiplicación      [number] [default: 10]
```

# instalación :
1. Clone este repositorio en su maquina local 
    - ### HTTPS
      -  `$ git clone git@github.com:Davidgraja/Node-Tabla-Multiplicar.git`
    - ### SSH
      - `$ git clone git@github.com:Davidgraja/Node-Tabla-Multiplicar.git`

2. Reconstruya los modulos de node : `$ npm install ` o  ` $ npm i`

3. Ejecute el archivo principal , en este tendra que enviar el numero base para hacer la multiplicacion   : `$ npm app -b 5     `  o  ` $ npm app -base 5 ` , una vez ejecutado se creara dentro de la carpeta `  salida ` un archivo de texto plano con  su tabla de multiplicar ; En caso de no enviar el argumento base no se ejecutara el archivo.