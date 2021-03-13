/*
 * suma.js
 *
 * funciones: suma, saludo
 *
 */

const suma = (a,b) => {
	return a+b;
}

const saludo = (nombre) => {
	return `Hola ${nombre}`;
}

//-----------------------------------

module.exports.suma = suma;
module.exports.saludo = saludo;
