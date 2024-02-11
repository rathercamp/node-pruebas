const fs = require('fs');

//Si es sync al final del nombre se ejecutan en orden

//Leer un archivo

fs.readFile('index.html','utf-8', (err, contenido) => {
    if(err){
        throw err;
    }
        console.log(contenido);
})

//Cambiar el nombre de un archivo

fs.rename('index.html', 'main.html', (err) => {
    if(err){
        throw err;
    }
        console.log('Nombre cambiado con exito');
})

//Agregar contenido al archivo

fs.appendFile('main.html', '<p>Hola</p>', (err) => {
    if(err){
        throw err; 
    }
    console.log('Archivo actualizado');
})

//Reemplazar todo el contenido del archivo

fs.writeFile('main.html', 'contenido nuevo', (err) => {
    if(err){
        throw err; 
    }
    console.log('Contenido reemplazado exitosamente');
})

//Eliminar archivos

fs.unlink('main copy.html', (err) => {
    if(err){
        throw err; 
    }
    console.log('Archivo eliminado');
})