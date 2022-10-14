"use strict";

const CLIENTES = [];

const domResults = document.getElementById("results");

const registerCliente = () => {
	
	let clienteName = document.getElementById("firstname").value;
	let clienteLastname = document.getElementById("lastname").value;
	if(clienteName == "" || clienteName == " " || clienteLastname == "" || clienteLastname == " ") {
		alert("Introduce un nombre y un apellido valido");
		return;
	}
	
	let cliente = new Cliente(`${clienteName } ${clienteLastname}`);
	CLIENTES.push(cliente);

	domResults.innerHTML += cliente.clienteDescDiv(CLIENTES.length - 1);
	
	document.getElementById("firstname").value = "";
	document.getElementById("lastname").value = "";
	console.table(CLIENTES);
}

const crearCuenta = (index) => {
	
	let cuenta = new Cuenta();
	CLIENTES[index].clienteCuenta = cuenta.numCuenta;
	CLIENTES[index] = ([CLIENTES[index],cuenta]);
	
	document.getElementById(index).innerHTML = CLIENTES[index][0].clienteDesc(index, CLIENTES[index][1].cuentaDesc());
	document.getElementById(index).classList.add("cuenta-activa");
	console.table(CLIENTES);
}

const deleteCliente = (index) => {
	
	CLIENTES.splice(index, 1, "");
	document.getElementById(`${index}`).remove();
	console.table(CLIENTES);
}

const ingresarCuenta = (index) => {
	let cuentaSaldo = CLIENTES[index][1].saldo;
	let cantidadIngresar = Number(prompt("¿Cuanto quieres ingresar?").replace(/,/g, '.'));
	if(cantidadIngresar <= 0 || isNaN(cantidadIngresar)) {
		alert("Valor no valido");
		return;
	}
	CLIENTES[index][1].saldo = cuentaSaldo + cantidadIngresar;
	
	document.getElementById(`${index}`).innerHTML = CLIENTES[index][0].clienteDesc(index, CLIENTES[index][1].cuentaDesc());
}

const retirarCuenta = (index) => {
	
	let cuentaSaldo = CLIENTES[index][1].saldo;
	if(cuentaSaldo <= 0) {
		alert(`Lo sentimos tu saldo es insuficiente. Saldo: ${cuentaSaldo} €`);
		return;
	}
	
	let cantidadRetirar = Number(prompt("¿Cuanto dinero quieres retirar?").replace(/,/g, '.'));
	
	if(cuentaSaldo - cantidadRetirar < 0) {
		alert(`Lo sentimos tu saldo es insuficiente. Saldo: ${cuentaSaldo} €`);
		return;
	} else if ( cantidadRetirar < 0 || isNaN(cantidadRetirar)) {
		alert(`Valor no valido`);
		return;
	} else {
		CLIENTES[index][1].saldo = cuentaSaldo - cantidadRetirar;
		document.getElementById(`${index}`).innerHTML = CLIENTES[index][0].clienteDesc(index, CLIENTES[index][1].cuentaDesc());
	}
}