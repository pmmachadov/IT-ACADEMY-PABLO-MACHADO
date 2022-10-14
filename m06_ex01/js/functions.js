	// Codigo JS 
	let firstNumber = Number(prompt("Primer número"));
	let secondNumber = Number(prompt("Segundo número"));
	let operador = prompt("Elije un operador + - * /");
	
	switch(operador) {
		case "+":
			solucion = numbersSuma(firstNumber,secondNumber);
			break;
		case "-":
			solucion = numbersResta(firstNumber,secondNumber);
			break;
		case "*":
			solucion = numbersMulti(firstNumber,secondNumber);
			break;
		case "/":
			solucion = numbersDivision(firstNumber,secondNumber);
			break;
		default:
			window.alert("No es un operador valido");
	}
	
	function numbersSuma(a,b) {
		let result = a + b;
		return result;
	}
	
	function numbersResta(a,b) {
		let result = a - b;
		return result;
	}
	
	function numbersMulti(a,b) {
		let result = a * b;
		return result;
	}
	
	function numbersDivision(a,b) {
		let result = a / b;
		return result;
	}
	
	document.getElementById("demo").innerHTML = solucion;
