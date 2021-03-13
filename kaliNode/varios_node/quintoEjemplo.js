/*
 * En Node.js podemos usar la opción --print-bytecode del comando node
 * para ver el bytecode generado.
 *
 * El código bytecode es muy utilizado por los lenguajes de alto nivel.
 *
 * Contiene instrucciones similares al código máquina.
 *
 * Luego, este código, al momento de ejecutar el programa, es traducido
 * al código máquina específico s/arquitectura donde se está ejecutando.
 *
 */

function suma(a,b) {
	return a+b;
}

console.log(suma(1,2));

/*
 * node --print-bytecode --print-bytecode-filter=suma .\async.js
 *
 */

