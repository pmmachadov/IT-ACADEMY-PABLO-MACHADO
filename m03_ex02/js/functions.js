	/* Fer un programa que li demani dos números enters  a l’usuari. Al final, el programa imprimeix per pantalla el següent missatge: 
		El resultat de la suma és: “valor”
		El resultat de la resta és: “valor”
		El resultat de la multiplicació és: “valor”
		El resultat de la divisió és: “valor”. */

		let firstNumber = Number(prompt("Dime un número"));
		let secondNumber = Number(prompt("¡Ahora otro número!"));
		
		let choosedNumbers = document.getElementById("numbers");
		let numbersCalc = document.getElementById("content");

		let resultSuma = "El resultat de la suma és: " + (firstNumber + secondNumber);
		let resultaResta = "El resultat de la resta és: " + (firstNumber - secondNumber);
		let resultMulti = "El resultat de la multiplicació és: " + (firstNumber * secondNumber);
		let resultDivisio = "El resultat de la divisió és: " + (firstNumber / secondNumber);

		choosedNumbers.innerHTML = "Números escogidos: "+firstNumber+" y "+secondNumber;
		numbersCalc.innerHTML = resultSuma + "<br>" + resultaResta + "<br>" + resultMulti + "<br>" + resultDivisio;