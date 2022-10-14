"use strict";

class Tools {
	constructor(){}
	
	printToPage(string) {
		document.getElementById("demo").innerHTML = string;
	}
	
	clearPage() {
		document.getElementById("demo").innerHTML = "";
	}
	
}

let tools = new Tools();

const ORDENADORES = [];

let brand, model, proc, ram, ssd;

let crearOrdinadors = () => {
	brand = prompt("Introduce la marca");
	model = prompt("Introduce el modelo");
	proc = prompt("Introduce el procesador");
	ram = prompt("Introduce la memoria ram");
	ssd = prompt("Introduce el almacenamiento");

	let ordenador = new Ordinador(brand, model, proc, ram, ssd);

	ORDENADORES.push(ordenador);

	mostrarOrdinadors();
};

let mostrarOrdinadors = () => {

	if (ORDENADORES.length === 0) {
		tools.printToPage("Lo sentimos, no hay articulos registrados");
		return;
	}

	let result = "";
	for (let i = 0; i < ORDENADORES.length; i++) {
		if (i > 0) {
			result += "<br>";
		}
		result += ORDENADORES[i].productDesc("<br>");
	}

	tools.printToPage(result);
};

let clearPage = () => {
	tools.clearPage();
};

let borrarItem = () => {

	ORDENADORES.pop();

	mostrarOrdinadors();
}


