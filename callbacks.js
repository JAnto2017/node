/*
 * Callbacks
 * Funciones anónimas, mr y cargarClientes. Esta última simula una llamada a través
 * de Internet a una API RestFul.
 * La secuencia de salida del programa no coincide con el orden de las líneas 
 * de código. Node.js sigue con el hilo de ejecución a pesar del bloqueo en la 
 * línea donde se quedó esperando que termine el timeout que simulaba la llamada
 * a la API.
 */

var mr = (mensaje) => { console.log(mensaje); }

var cargarClientes = (callback) => {
	//simula llamada a API en internet
	setTimeout(function() {
		callback('Fin carga de lista de clientes');
	}, 2500);
}

console.log('Inicio de proceso...');
cargarClientes(mr);
console.log('Fin del proceso');

