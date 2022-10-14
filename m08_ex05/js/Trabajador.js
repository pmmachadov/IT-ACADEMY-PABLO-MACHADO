class Trabajador {
	constructor(nom, cognom, carrec, disponibilitatTrasllat) {
		this._nom 						= nom;
		this._cognom 					= cognom;
		this._carrec 					= carrec;
		this._disponibilitatTrasllat 	= disponibilitatTrasllat;
	}
	
	get nom() {
		return this._nom;
	}
	
	set nom(nom) {
		this._nom = nom;
	}
	
	get cognom() {
		return this._cognom;
	}
	
	set cognom(cognom) {
		this._cognom = cognom;
	}
	
	get carrec() {
		return this._carrec;
	}
	
	set carrec(carrec) {
		this._carrec = carrec;
	}
	
	get disponibilitatTrasllat() {
		return this._disponibilitatTrasllat;
	}
	
	set disponibilitatTrasllat(disponibilitatTrasllat) {
		this._disponibilitatTrasllat = disponibilitatTrasllat;
	}
	
	toString() {
		return `${this.nom}, ${this.cognom}, ${this.carrec}, ${this.disponibilitatTrasllat}`;
	}
	
}