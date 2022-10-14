// Fes un programa que mostri el següent per pantalla:

// *

// * *

// * * *

// * * * *

// * * * * *

// * * * * * *

// * * * * *

// * * * *

// * * *

// * *

// *

// La línea amb més “*” vindrà donada per un número que l’usuari introduirà per teclat.

// Condició: En tot el codi del programa només hi pot haver-hi dos *
// També, a poder ser, no utilitzis cap mètode com repeat() o substring() de la classe String
"use strict";

let main = () => {

	document.getElementById("demo").innerHTML =
	getDraw(Number(document.getElementById("numero").value), "*");
	
};

let getDraw = (num, char) => {
	
	let message = "";
	
	for(let i = 0; i < num; i++) {
		for(let j = 0; j <= i; j++ ) {
			message += `${char}`;
		}
		message += `<br>`;
	}
	
	for (let i = 1; i <= num; i++) {
		for (let j = num; j > i; j--) {
			message += `${char}`;
		}
		message += `<br>`;
	}
	
	return message;
	
};
