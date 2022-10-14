// Codigo JS
// Demana a l'usuari un número entre 0 i 99 i mostra'l escrit en lletres (pots fer-ho en català o castellà).
// Exemple: 56 (cinquanta-sis) o 56 (cincuenta y seis)

function toWords() {
	let userNumber = Number(document.getElementById("usernumber").value);
	let resultado;

	const UNIDADES = ["Cero", "Uno", "Dos", "Tres", "Cuatro", "Cinco", "Seis", "Siete", "Ocho", "Nueve"];

	function getUnidades(arr, num) {
		let i = arr.find((element, index) => index == num);
		return i;
	}

	if (userNumber >= 0 && userNumber <= 99) {
		if (userNumber <= 9) {
			resultado = getUnidades(UNIDADES, userNumber);
		} else if (userNumber > 9) {
			let numberDecena = Math.floor(userNumber / 10);
			let numberUnidad = userNumber - numberDecena * 10;

			// console.log(numberDecena);
			// console.log(numberUnidad);

			switch (numberDecena) {
				case 1:
					switch (numberUnidad) {
						case 0:
							resultado = "Diez";
							break;
						case 1:
							resultado = "Once";
							break;
						case 2:
							resultado = "Doce";
							break;
						case 3:
							resultado = "Trece";
							break;
						case 4:
							resultado = "Catorce";
							break;
						case 5:
							resultado = "Quince";
							break;
						default:
							resultado = "Diesci" + getUnidades(UNIDADES, numberUnidad);
					}
					break;
				case 2:
					switch (numberUnidad) {
						case 0:
							resultado = "Veinte";
							break;
						default:
							resultado = "Veinti" + getUnidades(UNIDADES, numberUnidad);
					}
					break;
				case 3:
					switch (numberUnidad) {
						case 0:
							resultado = "Treinta";
							break;
						default:
							resultado = "Treinta y " + getUnidades(UNIDADES, numberUnidad);
					}
					break;
				case 4:
					switch (numberUnidad) {
						case 0:
							resultado = "Cuarenta";
							break;
						default:
							resultado = "Cuarenta y " + getUnidades(UNIDADES, numberUnidad);
					}
					break;
				case 5:
					switch (numberUnidad) {
						case 0:
							resultado = "Cincuenta";
							break;
						default:
							resultado = "Cincuenta y " + getUnidades(UNIDADES, numberUnidad);
					}
					break;
				case 6:
					switch (numberUnidad) {
						case 0:
							resultado = "Sesenta";
							break;
						default:
							resultado = "Sesenta y " + getUnidades(UNIDADES, numberUnidad);
					}
					break;
				case 7:
					switch (numberUnidad) {
						case 0:
							resultado = "Setenta";
							break;
						default:
							resultado = "Setenta y " + getUnidades(UNIDADES, numberUnidad);
					}
					break;
				case 8:
					switch (numberUnidad) {
						case 0:
							resultado = "Ochenta";
							break;
						default:
							resultado = "Ochenta y " + getUnidades(UNIDADES, numberUnidad);
					}
					break;
				case 9:
					switch (numberUnidad) {
						case 0:
							resultado = "Noventa";
							break;
						default:
							resultado = "Noventa y " + getUnidades(UNIDADES, numberUnidad);
					}
					break;
			}
		}
	} else {
		window.alert("Número fuera de rango");
	}

	document.getElementById("demo").innerHTML = resultado.toLowerCase();
}
