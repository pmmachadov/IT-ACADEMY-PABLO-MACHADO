// En aquest programa l’usuari ha d’introduir un string i, utilitzant un bucle for, el programa ha de mostrar l’string al revés
"use strict";

let main = () => {
	let userText = document.getElementById("string").value,
		textLength = userText.length,
		reversedText = [];

	for (let i = 0; i < textLength; i++) {
		reversedText.unshift(userText[i]);
	}

	document.getElementById("demo").innerHTML = `${reversedText.join("")}`;
};
