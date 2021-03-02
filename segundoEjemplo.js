/*
 * El resultado es:
 * 1
 * 3
 * pasado un tiempo...(2000 ms)
 * 2
 *
 */

console.log('1');

setTimeout(function callback() {
	console.log('2');
}, 2000);

console.log('3');


