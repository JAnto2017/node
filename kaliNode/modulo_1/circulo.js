
const area = (r) => {
	return Math.PI*r*r;
}

const saludo = (nombre) => {
	return 'Hola ${nombre}';
}

module.exports.area = area;
module.exports.saluso = saludo;
