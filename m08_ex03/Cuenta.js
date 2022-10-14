"use strict";

class Cuenta {
	static counter = Math.floor(Math.random() * 1000000);
	
	constructor(saldo = 0) {
		this._numCuenta = "ABC-00140" + "01" + Cuenta.counter++;
		this._saldo = saldo;
	}
	
	get numCuenta() {
		return this._numCuenta;
	}
	
	get saldo() {
		return this._saldo;
	}
	
	set saldo(saldo) {
		this._saldo = saldo;
	}
	
	cuentaDesc() {
		return `
		<p>Saldo: ${this.saldo}</p>
		`;
	}
}