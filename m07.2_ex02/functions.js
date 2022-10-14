// Fes un programa que mostri el següent per pantalla:

// * * * * * *

// * * * * *

// * * * *

// * * *

// * *

// *

// El nombre de línies formades per “*” vindrà donat per un número que l’usuari introduirà per teclat.

// Condició: En tot el codi del programa només hi pot haver un *
// També, a poder ser, no utilitzis cap mètode com repeat() o substring() de la classe String
"use strict";

let main = () => {
	
	document.getElementById("demo").innerHTML =
	getDraw(Number(document.getElementById("numero").value), "*");
	
};

let getDraw = (num, char) => {
	let message = "";
	
	for (let i = 0; i <= num; i++) {
		for (let j = num; j > i; j--) {
			message += char;
			console.log(message);
		}
		message += "<br>";
	}
	return message;
};
