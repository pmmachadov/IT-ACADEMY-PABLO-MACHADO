// Crea un programa on l’usuari introdueix tres notes i el programa calculi la mitja. Si la mitja és inferior a 5 ha de mostrar el següent missatge per pantalla: “No has superat el curs. Has de recuperar”, si la mitja està entre 5 i 7 ha de mostrar: “Enhorabona! Has aprovat però hauries de seguir practicant”, si la mitja és superior a 7 ha de mostrar: ”Enhorabona! Has superat el curs! Passa ja al següent nivell!
"use strict";

let main = () => {
	// Obtenemos los valores del formulario
	let media = getMedia("primeranota", "segundanota", "terceranota");

	// Obtenemos resultado
	let message = getMessage(media);

	// Imprimimos en pantalla
	document.getElementById("demo").innerHTML = message;
};

let getMedia = (...arr) => {
	// Obtenemos datos del DOM
	let arrSize = arr.length;
	let i = 0;
	let totalNotas = 0;
	while (i < arrSize) {
		let x = Number(document.getElementById(arr[i]).value);
		totalNotas += x;
		i++;
	}

	// Calculamos la media
	// To do: podemos pasar esto a otra función
	let mediaNotas = (totalNotas / arrSize).toFixed(2);

	return mediaNotas;
};

let getMessage = (a) => {
	let message;

	if (a < 5) {
		message = `Media: ${a}<br>No has superat el curs. Has de recuperar`;
	} else if (a >= 5 && a <= 7) {
		message = `Media: ${a}<br>Enhorabona! Has aprovat però hauries de seguir practicant`;
	} else {
		message = `Media: ${a}<br>Enhorabona! Has superat el curs! Passa ja al següent nivell!`;
	}

	return message;
};
