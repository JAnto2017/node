function sumarNumeros(numeros) {
	let total=0;
	for(let i=0;i<numeros.length;i++){
		total+=numeros[i];
	}
	return total;
};

console.log(sumarNumeros([1,3,44,2]));

