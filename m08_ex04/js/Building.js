class Building {
	static counterLicense = Math.ceil(Math.random() * 10000);

	constructor(name, floors, area) {
		this._name = name;
		this._floors = floors;
		this._area = area;
		this._license = Building.counterLicense++;
	}

	get name() {
		return this._name;
	}

	get floors() {
		return this._floors;
	}

	get area() {
		return this._area;
	}

	get license() {
		return this._license;
	}

	toString() {
		return `Clase madre/padre, no debe ser invocada directamente, implementar toString() en las derivadas`;
	}
	
	printToPage(tag, content) {
		document.getElementById(tag).innerHTML += content;
	}
	
	removeFromPage(id) {
		document.getElementById(id).remove();
	}

	// Es crearà un mètode netejar() en la classe adient, la qual mostrarà per pantalla el temps que s’ha trigat a netejar l’edifici, tenint en compte que es triga en netejar un minut per cada 5 m². A més, si un edifici té més d’una planta, es triga a pujar mig minut d’una planta a una altra. Per tant, afegirem mig minut per cada planta addicional. Per cada minut de feina es pagarà un euro diari. A més, com que es neteja cada dia, per obtenir el cost mensual, haurem de multiplicar per 30 (aquest cost mensual també es mostrarà per pantalla)
	cleanUp() {
		let min = Math.ceil(this.area / 5);

		if (this.floors > 1) {
			min += Math.ceil((this.floors - 1) * 0.5);
		}

		let hours = Math.floor(min / 60),
			minuts = min % 60,
			monthlyCost = min * 30;

		return `Limpiar el edificio ${this.constructor.name} ${this.name} requiere ${hours} hora(s) y ${minuts} minutos, el coste mensual estimado es de ${monthlyCost} €`;
	}

	// A més, s’implementarà un mètode anomenat calcularCostVigilancia() que mostrarà el que costa al mes contractar vigilants a cada edifici. Es considera que cada vigilant d’hotel o hospital pot vigilar 1000 m². Per tant, si un edifici té una superfície de 5500 m², necessitarem 6 vigilants. En canvi, els vigilants dels cinemes poden vigilar 3000 m². Contractar cada vigilant costa als propietaris de l’edifici 1.300 euros mensuals, però els vigilants d’hotels cobren un plus de perillositat de 500 euros mensuals.
	calcSurveillance(guards, monthlyCost) {
		if (guards == null || monthlyCost == null) {
			return `Este método require implementarse en la clase derivada`;
		}
		return `La seguridad del ${this.constructor.name} ${this.name} consta de ${guards} vigilantes, el coste mensual estimado es de ${monthlyCost.toFixed(2)} €`;
	}
}

