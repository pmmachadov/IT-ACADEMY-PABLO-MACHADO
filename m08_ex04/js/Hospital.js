class Hospital extends Building {
	constructor(name, floors, area, patients) {
		super(name, floors, area);
		this._patients = patients;
	}

	get patients() {
		return this._patients;
	}

	set patients(patients) {
		this._patients = patients;
	}

	toString() {
		return `${this.name} de ${this.area} m² y ${this.floors} plantas, en este momento ${this.patients} pacientes.`;
	}
	
	toDOM() {
		return `
		<div id="element-${this.license}" class="position-relative text-start p-3 border shadow-sm rounded-3 mb-3">
		<span class="pe-none position-absolute top-0 end-0 p-3">🚑</span>
		<details>
		<summary>
		${this.constructor.name} ${this.name} - Licencia nº ${this.license} 
		</summary>
		<p>${this.constructor.name} ${this.name} de ${this.area} m² y ${this.floors} plantas, en este momento ${this.patients} pacientes.</p>
		<p>${this.serveMeals()}</p>
		<p>${this.calcSurveillance()}</p>
		<button class="btn btn-outline-danger btn-sm" onclick="deleteBuilding(${this.license})">Eliminar</button>
		</details>
		</div>
		`
	}

	// A l’hospital es reparteix dinar pels malalts tres vegades al dia. Hi haurà un mètode repartirDinar() en el lloc adient que mostrarà, quan sigui cridat, el missatge “S’estan repartint xxx racions”. Aquest número pot variar al llarg del temps, i per tant, s’haurà de permetre accedir a l’atribut corresponent, tant per llegir-lo com per modificar-lo, encara que no es faci directament.
	serveMeals() {
		let meals = this.patients * 3;
		return `Se están repartiendo ${meals} raciones diarias para ${this.patients} pacientes.`;
	}

	// A més, s’implementarà un mètode anomenat calcularCostVigilancia() que mostrarà el que costa al mes contractar vigilants a cada edifici. Es considera que cada vigilant d’hotel o hospital pot vigilar 1000 m². Per tant, si un edifici té una superfície de 5500 m², necessitarem 6 vigilants. En canvi, els vigilants dels cinemes poden vigilar 3000 m². Contractar cada vigilant costa als propietaris de l’edifici 1.300 euros mensuals, però els vigilants d’hotels cobren un plus de perillositat de 500 euros mensuals.
	calcSurveillance() {
		let guards = Math.ceil(this.area / 1000),
			monthlyCost = guards * 1300;

		return super.calcSurveillance(guards, monthlyCost);
	}
}
