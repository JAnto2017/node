/*
 * Una propiedad puede contener otro objeto, un valor primitivo o una función.
 *
 */

var objetoJS = {
	fs: function(a,b) {
		return a + b;
	},
	prop1: 'Propiedad 1',
	prop2: 12345,
	gs: function(n) {
		return n+1;
	}
};

/*
 * Aquí podemos ver que sus propiedades son valores de tipos primitivos
 * o funciones (esta notación para definir un objeto se llama inicializador
 * de objeto)
 *
 */

