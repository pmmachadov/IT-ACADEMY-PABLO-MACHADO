// Taula de multiplicar. L’usuari introduirà un número (del 1 al 10) per pantalla, i utilitzant un bucle, el programa li mostrarà la taula de multiplicar d’aquell número.

// Exemple:

// 2 x 1 = 2

// 2 x 2 = 4

// 2 x 3 = 6

// ...

// 2 x 10 = 20
"use strict";

let main = () => {
	// Reiniciamos el DOM
	document.getElementById("demo").innerHTML = "";
	
	// Obtenemos el numero para generar la tabla
	let userNumber = getNumber("numero");
	
	// Generamos la tabla SOLO si el número es del 1 al 10
	if(userNumber) { 
		generarTabla(userNumber); 
	} else { 
		return; 
	}
	
};

let getNumber = (a) => {
	
	let userNumber = Number(document.getElementById(a).value);
	
	if(userNumber <= 0 || userNumber > 10) {
		alert("Tiene que ser un número del 1 al 10");
		return false;
	}
	
	return userNumber;
	
};

let generarTabla = (a) => {
	
	let counter = 1;
	while(counter <= 10) {
		document.getElementById("demo").innerHTML += `${a} &times; ${counter} = ${a * counter}<br>`;
		counter++;
	}
	
};