// Realitzar un programa on l’usuari introdueix un número i el programa crida a un mètode que retorna el factorial del número introduit.

// El factorial d'un nombre n (enter, no negatiu) és el producte de tots els nombres enters positius inferiors o iguals a n. 
"use strict";

let main = () => {
	
	let userNumber = Number(document.getElementById("numero").value);
	
	if(isNaN(userNumber) || userNumber <= 0) {
		document.getElementById("demo").innerHTML ="Introduce un número entero no negativo valido ";
		return;
	}
	
	document.getElementById("demo").innerHTML = `El factorial de ${userNumber} es: ${factorial(userNumber)}`
	
};

let factorial = (n) => {
	// Función recursiva trambolica
	//let calcFactorial = (n <= 1) ? 1 : n * factorial(n - 1);
	
	let fact = 1;
	
	for(let i = 1; i <= n; i++) {
		fact *= i;
	}
	
	return fact;
};
	
	
	
