// Codigo JS

function calcMedia() {
	let peopleNum = Number(document.getElementById("peoplenum").value);
	let totalEdad = 0;
	let contador = 0;

	while (contador < peopleNum) {
		let x = Number(prompt("Introduce la edad del usuario"));

		if (x > 120) {
			window.alert("La edad no puede ser mayor a 120");
			break;
			return;
		}

		totalEdad += x;
		contador++;
	}
	totalEdad = Math.floor(totalEdad / peopleNum);

	totalEdad ? (document.getElementById("demo").innerHTML = totalEdad) : (document.getElementById("demo").innerHTML = "Error");
}
