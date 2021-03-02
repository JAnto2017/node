/* módulo para aplicaciones en un servidor web es el http
 * HTTP, sirve para transferencia de datos entre servidor y host
 * http://host[:puerto][/ruta y archivo][?parámetros]
 * http: 	indica el protocolo
 * host: 	nombre del dominio
 * puerto: 	por defecto es el 80, (se puede cambiar)
 * ruta:	indica el archivo en el servidor
 * ?parámetros:	datos a enviar del host al servidor
 *
 * Cuando se trabajo con Node.js debemos codificar nosotros el servidor web, muy distinto a como se trabaja en PHP, que contiene Apache.
 *
 */

const http = require('http');

const servidor = http.createServer((pedido, respuesta) => {
	respuesta.writeHead(200, {'Content-Type': 'text/html'});
	respuesta.write(`<!doctype html><html><head></head><body><h1>Sitio web creado con Node.js</h1></body></html>`);
	respuesta.end();
});

servidor.listen(8888);

console.log('Servidor web iniciado');
