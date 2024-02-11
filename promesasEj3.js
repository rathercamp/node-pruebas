function ordenarProducto(producto) {
	return new Promise((resolve, reject) => {
		console.log(`Ordenando ${producto} de Modas Pepi`);
		setTimeout(() => {
			if(producto === 'taza'){
				resolve('Ordenando una taza con el logo de modas pepi');
			}else{
				reject('Este producto no está disponible actualmente');
			}
		} ,2000);
	});
};

function procesarPedido(respuesta) {
	return new Promise (resolve => {
		console.log('Procesando respuesta...');
		console.log(`La respuesta fue: "${respuesta}"`);
		setTimeout(() => {
			resolve('Gracias por tu compra. Disfruta tu producto de modas pepi');
		},4000);
	});
}

//Manejar promesas encadenando then

ordenarProducto('lapiz')
	.then(respuesta => {
		console.log('Respuesta recibida');
		console.log(respuesta);
		return procesarPedido(respuesta);
	})
	.then(respuestaProcesada => {
		console.log(respuestaProcesada);
	})
	.catch(error => {
		console.log(error);
	});

//manejar promesas usando async await

async function realizarPedido(producto){
	try{
		const respuesta = await ordenarProducto(producto);
		console.log('Respuesta recibida');
		console.log(respuesta);
		const respuestaProcesada = await procesarPedido(respuesta);
		console.log(respuestaProcesada);
	}catch(error){
		console.log(error);
	}
}

realizarPedido('lapiz');