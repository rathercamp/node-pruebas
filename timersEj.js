
function mostrarTema(tema){
    console.log(`Estoy aprendiendo ${tema}`);
}

setTimeout(mostrarTema, 5000, 'Node.js');

function sumar(a, b){
    console.log(a + b);
}

setInterval(sumar, 1500, 8, 9);

setTimeout(sumar, 2000, 5, 6);

function mostrarTema(tema){
    console.log(`Estoy aprendiendo ${tema}`);
}

setInterval(mostrarTema, 1500, 'node.js');


console.log('Antes de setImmediate()');

setImmediate(mostrarTema,'Node.js');

console.log('Después de setImmediate()');
