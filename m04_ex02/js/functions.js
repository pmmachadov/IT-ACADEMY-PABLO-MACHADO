	// Aquest programa li demana l’edat a l’usuari, en funció d’aquesta, mostrarem un dels següents missatges per pantalla:
	// Si té 5 anys o menys: preescolar
	// Si té entre 6 i 11 anys: primària
	// Si té entre 12 i 15: ESO
	// Si té entre 16 i 17: Batxillerat
	// Si és major d'edat: FP o Universitat

	// Solicitamos la edad al usuario
	let userAge = Number(prompt("¿Que edad tienes?"));

		if (userAge <= 5) {
			document.write("Preescolar");
		} else if (userAge >= 6 && userAge <= 11) {
			document.write("Primària");
		} else if (userAge >= 12 && userAge <= 15) {
			document.write("ESO");
		} else if (userAge >= 16 && userAge <= 17) {
			document.write("Batxillerat");
		} else if (userAge >= 18) {
			document.write("FP o Universitat");
		} 
