/*
 * Web Apis - para las llamadas bloqueantes,
 * que una vez finalizadas, se colocan en el EventLoop
 * que luego las inyecta en el stack de ejecución mediante el 
 * callback asociado.
 * Node utiliza la librería libuv para este propósito.
 *
 */
console.log('1');
setTimeout(function callback() {
	console.log('2');
}, 2000);

console.log('3');
console.log('window.screenX',window.screenX);


