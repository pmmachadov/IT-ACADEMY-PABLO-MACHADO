class Cinema extends Building {
	constructor(name, floors, area, capacity) {
		super(name, floors, area);
		this._capacity = capacity;
	}

	get capacity() {
		return this._capacity;
	}

	set capacity(capacity) {
		this._capacity = capacity;
	}

	toString() {
		return `${this.name} de ${this.area} m², ${this.floors} plantas y un aforo de ${this.capacity} personas.`;
	}
	
	toDOM() {
		return `
		<div id="element-${this.license}" class="position-relative text-start p-3 border shadow-sm rounded-3 mb-3">
		<span class="pe-none position-absolute top-0 end-0 p-3">🍿</span>
		<details>
		<summary>
		${this.constructor.name} ${this.name} - Licencia nº ${this.license} 
		</summary>
		<p>${this.constructor.name} ${this.name} de ${this.area} m², ${this.floors} plantas y un aforo de ${this.capacity} personas.</p>
		<p>${this.calcSurveillance()}</p>
		<ol id="movie-session-${this.license}"></ol>
		<button class="btn btn-outline-primary btn-sm" onclick="doMovieSession(${this.license})">Sesión</button>
		<button class="ms-2 btn btn-outline-danger btn-sm" onclick="deleteBuilding(${this.license})">Eliminar</button>
		</details>
		</div>
		`
	}

	// Al cinema es crearà la funció projectarSessio(), que mostrarà el missatge “S’han recaptat xxx.xx euros”, tenint en compte que, per calcular la recaptació, s’ha de multiplicar el preu d’una entrada pel número d’assistents a la sessió, que no podrà superar l’aforament màxim. Per tant, la funció projectarSessió haurà de rebre com a paràmetres el número d’assistents i el preu de l’entrada per aquella sessió. El número d’assistents a la sessió no pot ser més gran que l’aforament total de la sala.
	movieSession(attendees, ticketPrice) {
		if (attendees > this.capacity) {
			alert(`Esta sesión supera el aforo permitido.`);
			return
		}
		let collected = attendees * ticketPrice;

		return `En esta sesión se han recaudado ${collected.toFixed(2)} €`;
	}

	// A més, s’implementarà un mètode anomenat calcularCostVigilancia() que mostrarà el que costa al mes contractar vigilants a cada edifici. Es considera que cada vigilant d’hotel o hospital pot vigilar 1000 m². Per tant, si un edifici té una superfície de 5500 m², necessitarem 6 vigilants. En canvi, els vigilants dels cinemes poden vigilar 3000 m². Contractar cada vigilant costa als propietaris de l’edifici 1.300 euros mensuals, però els vigilants d’hotels cobren un plus de perillositat de 500 euros mensuals.
	calcSurveillance() {
		let guards = Math.ceil(this.area / 3000),
			monthlyCost = guards * 1300;

		return super.calcSurveillance(guards, monthlyCost);
	}
}
