// L’usuari ha d’introduir una frase i el programa ha de dir si la frase és un palíndrom
//
// Ejemplos de palindromos para probar:
// acurruca
// dañad
// radar
// rallar
// reconocer
// A luna ese anula
// A Mercedes, ese de crema
// A mi loca Colima
// A ti no, bonita
// Amad a la dama
// Amar da drama
// Amigo, no gima
// Amor a Roma
// Ana lava lana
// Anita lava la tina
// Anula la luna
// Ateo poco poeta
"use strict";

let main = () => {
	let userText = document.getElementById("string").value,
		userTextArray = [],
		userTextReversed = [];

	for (let letter of userText) {
		if (letter == " " || letter == "," || letter == ".") {
			continue;
		}
		userTextArray.push(letter);
		userTextReversed.unshift(letter);
		//console.log(letter);
	}

	if (userTextArray.join("").toLowerCase() === userTextReversed.join("").toLowerCase()) {
		document.getElementById("demo").innerHTML = `¡${userText}, es un palíndromo!`;
	} else {
		document.getElementById("demo").innerHTML = `${userText}, no es un palíndromo`;
	}
};
