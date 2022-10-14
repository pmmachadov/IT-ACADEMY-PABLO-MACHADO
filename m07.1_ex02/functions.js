
// Un professor vol calcular les mitges de les notes de tota la classe. Crea una aplicació on l'usuari introduirà un número per pantalla (el número correspon al número de notes que vol introduir) i el programa li demanarà que introdueixi les notes de tots els alumnes.
// Un cop les notes han sigut introduides, el programa retorna el següent:
// Si la nota mitjana és menor que 5: "La nota mitjana de la classe està suspesa. Els alumnes haurien de preguntar els seus dubtes i treballar més".
// Si la nota és inferior a 7: "La nota mitjana de la classe és bona, però els alumnes haurien de millorar el treball personal".
// Per la resta de casos, el missatge ha de ser: "Enhorabona! La nota mitjana de la classe es correspon amb l'esforç realitzat".
// *Les notes han d'estar compreses entre 0 i 10.
"use strict";

let main = () => {
	let numNotasTotal = Number(document.getElementById("notas").value);
	
	let media = getMedia(numNotasTotal);
	
	let message = getMessage(media);
	
	document.getElementById("demo").innerHTML = message;
};

let getMedia = (a) => {
	// To do: ¿acortar esta función?
	let sumaNotasAlumnos = 0;
	let contador = 0;
	
	while(contador < a) {
		
		let notasAlumnos = Number(prompt("Introducir nota del alumno, 0-10"));
		if(notasAlumnos < 0 || notasAlumnos > 10) {
			window.alert("Introduce una nota valida");
			continue; // To do: esto no haría falta
		}
		sumaNotasAlumnos += notasAlumnos;
		contador++;
	}
	
	let mediaNotasClase = sumaNotasAlumnos / a;
	
	return mediaNotasClase;
};

let getMessage = (a) => {
	
	let message = "";
	
	if(a < 5) {
		message =
		`Media: ${a}<br>La nota mitjana de la classe està suspesa. Els alumnes haurien de preguntar els seus dubtes i treballar més`;
	
	} else if (a < 7) {
		message = 
		`Media: ${a}<br>La nota mitjana de la classe és bona, però els alumnes haurien de millorar el treball personal`;
		
	} else {
		message =
		`Media: ${a}<br>Enhorabona! La nota mitjana de la classe es correspon amb l'esforç realitzat`;
	}
	
	return message;
};