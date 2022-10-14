// L’usuari ha d’introduir dos números, el programa retornarà “Un dels dos números és negatiu”, només si un dels dos números és negatiu.
"use strict";

let main = () => {
	
	let hasNegative = getNumbers("numero1","numero2");
	
	let message = resultMessage(hasNegative);
	
	document.getElementById("demo").innerHTML = message;
	
};

let getNumbers = (a,b) => {
	
	let hasNegative = 0;
	let num1 = Number(document.getElementById(a).value);
	let num2 = Number(document.getElementById(b).value);
	
	// Otro metodo
	// let oneIsNegative = num1 * num2;
	// hasNegative = (oneIsNegative < 0) ? 1 : 0;
	
	if((num1 < 0 && num2 >= 0) || (num1 >= 0 && num2 < 0)) {
		hasNegative = 1;
	} else if (num1 < 0 && num2 < 0) {
		hasNegative = 2;
	}
	
	return hasNegative;
};

let resultMessage = (a) => {
	
	let message;
	
	switch(a) {
		case 0:
			message = `No hay números negativos`;
			break;
		case 1:
			message = `Uno de los números es negativo`;
			break;
		case 2:
			message = `Los dos números son negativos`;
	}
	
	return message;
};