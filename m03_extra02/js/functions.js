	// Escriu un programa JavaScript que calculi els litres de pintura necessaris per a pintar una paret rectangular.

		// Un litre de pintura cobreix aproximadament, 12m2 en una sola mà.

		// Crea una constant anomenada coberturaLitre per a guardar la dada de cobertura de la pintura (12m2)
		// Hauràs de demanar a l'usuari:
		// - L'alt i ample de la paret ( multiplicant sabràs l'àrea de la mateixa )
		// - El nombre de mans a aplicar

		// Mostra en pantalla els litres de pintura a utilitzar.

		// Definimos valores constantes invariables
		const coberturaLitre = 12;

		// Definimos variables que necesitaremos
		let anchoPared, altoPared;
		let capasPintura;
		let areaPared;
		let totalLitres;

		// Molestamos al usuario con un prompt xD
		anchoPared = Number(prompt("¿Ancho de la pared?"));
		altoPared = Number(prompt("¿Alto de la pared?"));
		capasPintura = Number(prompt("¿Cuantas capas de pintura aplicaras?"));

		// Calculamos los datos introducidos
		areaPared = anchoPared * altoPared; // Obtenemos los m2 de la pared
		totalLitres = (areaPared / coberturaLitre) * capasPintura;

		// Imprimimos en pantalla
		document.write("Se necesita "+totalLitres.toFixed(1)+" litro(s) para una pared de "+areaPared+" m2, poniendo "+capasPintura+" capas");
	