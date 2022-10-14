// L’usuari ha d'introduir un número i el programa ha de mostrar per pantalla si el número és parell o imparell.

let esPar = () => {
	
	let number = Number(document.getElementById("number").value);
	
	if(number % 2 == 0) {
		message = `${number} es un número par`;
	} else {
		message = `${number} es un número impar`;
	}
	
	document.getElementById("demo").innerHTML += `${message}<br>`;
};