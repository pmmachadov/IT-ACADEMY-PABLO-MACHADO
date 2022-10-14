	// 	L’usuari introdueix un mes per pantalla i mitjançant un switch amb els 12 mesos de l’any, el programa calcula els dies del mes i mostra el següent: 
			// Exemple: Si el número introduït és 1, llavors ha d'aparèixer per pantalla: “El mes de gener té 31 dies”
			let demoTag = document.getElementById("demo");
			let monthNumber = Number(prompt("Número del mes"));
			let message;
			// Enero 1 / 31
			// Febrero 2 / 28
			// Marzo 3 / 31
			// Abril 4 / 30
			// Mayo 5 / 31
			// Junio 6 / 30
			// Julio 7 / 31
			// Agosto 8 / 31
			// Septiembre 9 / 30
			// Oct 10 / 31
			// Noviembre 11 / 30
			// Diciembre 12 / 31

			switch(monthNumber) {
				case 1:
				case 3:
				case 5:
				case 7:
				case 8:
				case 10:
				case 12:
					message = "Mes con 31 días";
					break;
				case 2:
					message = "Mes con 28 días";
					break;
				case 4:
				case 6:
				case 9:
				case 11:
					message = "Mes con 30 días";
					break;
				default:
					message = "Eso no es un número de mes";
			}
			
			demoTag.innerHTML = message;