const estatusPedido = () => {
    return Math.random() < 0.8;
};

const miPedidoPizza = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(estatusPedido()){
            resolve('¡Pedido exitoso! Su pizza está en camino');
        }else{
            reject('Ocurrió un error. Intentelo de nuevo');
        }
    },3000);
});

miPedidoPizza
    .then((mensajeConfirmacion) => {
        console.log(mensajeConfirmacion);
    })
    .catch((mensajeError) => {
        console.log(mensajeError)
    });