// L’usuari ha d’introduir un DNI i el programa ha de dir si la lletra és correcte o no amb el nombre de DNI. Si la lletra no és correcta, ha de dir quina lletra és la correcta.

// Per calcular la lletra DNI has de prendre el número de DNI a verificar i dividir-lo entre 23. La resta es reemplaça per una lletra que ja està assignada a aquest nombre mitjançant la taula adjunta:.
"use strict";

let main = () => {
	const letrasDNI = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
	
	let userDNI = Number(document.getElementById("numero").value),
		userDNIRemainder = userDNI % 23,
		letrasDNILength = letrasDNI.length;
		
	if (isNaN(userDNI) || userDNI.toString().length < 8) {
		document.getElementById("demo").innerHTML = `Introduce un número de DNI correcto ⚠️`;
		return;
	}
	
	for (let i = 0; i <= letrasDNILength; i++) {
		if (userDNIRemainder === i) {
			document.getElementById("demo").innerHTML = `${userDNI}${letrasDNI[i]}`;
		}
	}
};
