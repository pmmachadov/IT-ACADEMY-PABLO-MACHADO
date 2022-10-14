	// Fer un programa que demani dos números i un operador(+,-,*,/).
		// Al final, el programa ha d'imprimir per pantalla el resultat de fer l’operació que contingui la variable operador.
		let demoTag = document.getElementById("demo");
		let firstNumber = Number(prompt("Introduce un número"));
		let secondNumber = Number(prompt("Ahora otro"));
		let operador = prompt("Introduce un operador (+,-,*,/)");
		let resultado;

		switch(operador) {
			case "+":
				resultado = firstNumber + secondNumber;
				break;
			case "-":
				resultado = firstNumber - secondNumber;
				break;
			case "*":
				resultado = firstNumber * secondNumber;
				break;
			case "/":
				resultado = firstNumber / secondNumber;

		}
			
		demoTag.innerHTML = resultado;