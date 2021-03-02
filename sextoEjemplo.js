/*
 * For para las propiedades de un objeto y se suma su valor en la variable total
 *
 * Este programa era más óptimo en Node.js v6.0 que en v8.0
 * En versiones posteriores se corrige el problema.
 *
 * No siempre en versiones superiores se mejora
 *
 */
var obj = { x:1, y:1, z:1 }
var total = 0;
for (var i in obj) {
	if(obj.hasOwnProperty(i)) {
		total += obj[i]
	}
}

console.log(total);


