// Codigo JS
// Fes un programa que pregunti a l'usuari dos nombres enters al qual anomenaràs dividend i divisor respectivament.
// El divisor haurà d'estar comprès entre 2 i 7.
// En cas contrari, el programa haurà de mostrar un missatge d'error.
// Si el divisor és correcte (2-7) mostra en pantalla si el dividend és múltiple del divisor, o no.

let dividend = Number(prompt("Introduce el dividendo"));
let divisor = Number(prompt("Introduce el divisor"));
let resultado;

if (divisor >= 2 && divisor <= 7) {
	let isMultiple = dividend % divisor;
	console.log(isMultiple);
	Boolean(isMultiple);
	isMultiple ? (resultado = `${dividend} <b>no</b> es multiplo de ${divisor}`) : (resultado = `${dividend} <b>es</b> multiplo de ${divisor}`);
} else {
	window.alert("Error el divisor no está en rango");
}

document.getElementById("demo").innerHTML = resultado;
