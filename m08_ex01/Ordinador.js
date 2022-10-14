class Ordinador {
	constructor(brand, model, proc, ram, ssd) {
		this._brand = brand;
		this._model = model;
		this._proc = proc;
		this._ram = ram;
		this._ssd = ssd;
	}
l
	get brand() {
		return this._brand;
	}

	get model() {
		return this._model;
	}

	get proc() {
		return this._proc;
	}

	get ram() {
		return this._ram;
	}

	get ssd() {
		return this._ssd;
	}

	set brand(brand) {
		this._brand = brand;
	}

	set model(model) {
		this._model = model;
	}

	set proc(proc) {
		this._proc = proc;
	}

	set ram(ram) {
		this._ram = ram;
	}

	set ssd(ssd) {
		this._ssd = ssd;
	}
	
	appInExec(app) {
		return `En aquests moments s\'està executant: ${app}`;
	}

	productDesc(separator = "") {
		return `
		
		Marca: ${this.brand} ${separator}
		Modelo: ${this.model} ${separator}
		Procesador: ${this.proc} ${separator}
		Memoria: ${this.ram} ${separator}
		SSD: ${this.ssd} ${separator}
		`;
	}
}
