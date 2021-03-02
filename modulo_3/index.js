const pp = require('pretty-print');
const persSrv = require('./src/services/personas.service');

var personas = persSrv.obtenerPersonas();

var options = {
	rightPadding: 3,
	key: 'nombre',
	value: 'edad'
};

pp(personas,options);

