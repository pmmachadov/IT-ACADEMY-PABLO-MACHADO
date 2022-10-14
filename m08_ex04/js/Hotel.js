class Hotel extends Building {
	constructor(name, floors, area, rooms) {
		super(name, floors, area);
		this._rooms = rooms;
	}

	get rooms() {
		return this._rooms;
	}

	set rooms(rooms) {
		this._rooms = rooms;
	}

	toString() {
		return `${this.name} de ${this.area} m² y ${this.floors} plantas, tiene ${this.rooms} habitaciones`;
	}
	
	toDOM() {
		return `
		<div id="element-${this.license}" class="position-relative text-start p-3 border shadow-sm rounded-3 mb-3">
		<span class="pe-none position-absolute top-0 end-0 p-3">🏨</span>
		<details>
		<summary>
		${this.constructor.name} ${this.name} - Licencia nº ${this.license} 
		</summary>
		<p>${this.constructor.name} ${this.name} de ${this.area} m² y ${this.floors} plantas, tiene ${this.rooms} habitaciones.</p>
		<p>${this.calcMaintenance().staff}</p>
		<p>${this.calcMaintenance().price}</p>
		<p>${this.calcSurveillance()}</p>
		<button class="btn btn-outline-danger btn-sm" onclick="deleteBuilding(${this.license})">Eliminar</button>
		</details>
		</div>
		`
	}

	// En els hotels cada dia passa el servei d’habitacions. Es calcula que cada membre del servei pot atendre 20 habitacions. Es crearà un mètode que calculi, i mostri per pantalla: a) Quantes persones són necessàries per atendre el servei d’habitacions l’hotel. b) Quin és el total necessari pels sous d’aquestes persones, tenint en compte que cada persona cobra 1.000 euros al mes.
	calcMaintenance() {
		let personal = Math.ceil(this.rooms / 20),
			monthlyCost = personal * 1000;

		return {
			staff: `Se necesitan ${personal} personas de mantenimiento para ${this.rooms} habitaciones`,
			price: `El presupuesto para ${personal} personas de mantenimiento es ${monthlyCost.toFixed(2)} € al mes`,
		};
	}

	// A més, s’implementarà un mètode anomenat calcularCostVigilancia() que mostrarà el que costa al mes contractar vigilants a cada edifici. Es considera que cada vigilant d’hotel o hospital pot vigilar 1000 m². Per tant, si un edifici té una superfície de 5500 m², necessitarem 6 vigilants. En canvi, els vigilants dels cinemes poden vigilar 3000 m². Contractar cada vigilant costa als propietaris de l’edifici 1.300 euros mensuals, però els vigilants d’hotels cobren un plus de perillositat de 500 euros mensuals.
	calcSurveillance() {
		let guards = Math.ceil(this.area / 1000),
			monthlyCost = guards * 1300 + guards * 500;

		return super.calcSurveillance(guards, monthlyCost);
	}
}
