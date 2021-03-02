/*
 * Point.js
 *
 * clases en JS
 *
 */

class Point {
	constructor(_x,_y){
		this.x=_x;
		this.y=_y;
	}
}

var p1 = new Point(11,22);
var p2 = new Point(33,44);

p1.z =55;

/*
 * Es válido no produce error.
 * Obliga al compilador a realizar trabajo extra, para actualizar
 * todas las referencias a la clase Point.
 *
 * Siempre es aconsejable declarar todos los tipos de datos con sus
 * propiedades en tiempo de diseño.
 *
 */

