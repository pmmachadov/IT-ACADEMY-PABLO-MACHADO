// Modifica l’exercici 1 del mòdul 3. Un cop introduïdes les dades, el programa ha de mostrar el següent per pantalla:
// - Si l’usuari té 18 anys o més: “Nom Cognom, ets MAJOR d’edat”
// - Si l’usuari és menor de 18 anys: “Nom Cognom, ets MENOR d’edat”.

let userName = prompt("¿Como te llamas?");
let userLastName = prompt("¿Cual es tu apellido?");
let userAge = Number(prompt("¿Que edad tienes?"));

let userDataField = document.getElementById("userdata");

let alertMessage;
if (userAge >= 18) {
	alertMessage = userName + " " + userLastName + ", ets MAJOR d'edat";
} else {
	alertMessage = userName + " " + userLastName + ", ets MENOR d'edat";
}

userDataField.innerHTML = alertMessage;
console.log(alertMessage);
