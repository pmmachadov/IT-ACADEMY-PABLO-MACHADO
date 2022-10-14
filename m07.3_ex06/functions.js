// Dona’t un array de números, el programa ha de mostrar la suma de tots els números parells i la suma de tots els números imparells.
"use strict";

let main = () => {
	
	let userNumbers = document.getElementById("numero").value,
		sumEvenNumbers = 0,
		sumOddNumbers = 0;
		
	userNumbers = userNumbers.split(",");
	let userNumbersLength = userNumbers.length;
	
	console.log(userNumbers);
	
	for(let i = 0; i < userNumbersLength; i++) {
		if(Number(userNumbers[i]) % 2 === 0) {
			sumEvenNumbers += Number(userNumbers[i]);
			//console.log(userNumbers[i]);
		} else if(Number(userNumbers[i]) % 2 !== 0) {
			sumOddNumbers += Number(userNumbers[i]);
			//console.log(userNumbers[i]);
		}
	}
	document.getElementById("demo").innerHTML = `Suma de pares es ${sumEvenNumbers}<br>Suma de impares es ${sumOddNumbers}`;
}