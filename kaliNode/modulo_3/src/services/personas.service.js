const persona=require('../models/persona.model');
const helpers=require('../helpers');

const cantPersonas = 3;

function obtenerPersonas() {
	let personas = new Array(),
		cont='',
		edad=0;
	for(let i=0;i<cantPersonas;i++){
		cont=i.toString();
		edad=helpers.randomInt(1,99);

		personas.push(new persona(
			'Nombre '+cont,
			'Apellido '+cont,
			edad));
	}
	return personas;
}

module.exports.obtenerPersonas=obtenerPersonas;

