// Has de modificar el programa anterior per afegir una nova funcionalitat: establir un número màxim de 5 intents.
// Si l’usuari encerta el número escollit pel programa abans d'aquests 5 intents, el programa mostra el següent missatge per pantalla: “Enhorabona, el número és X i has necessitat Y intents per encertar-lo”.
// Si no encerta el número abans de 5 intents, el programa mostra per pentalla: "Has utilitzat massa intents! El número és X ".

let programNumber = Math.ceil(Math.random() * 10);
let userNumber;
let contador = 1;
let message;

while (programNumber != userNumber) {
	userNumber = Number(prompt("Introduce un número"));

	if (contador == 5) {
		message = `Has utilitzat massa intents! El número és ${programNumber}`;
		break;
	}

	if (programNumber == userNumber) {
		message = `Enhorabona, el número era ${programNumber} i has necessitat ${contador} intents per encertar-lo`;
		break;
	}

	contador++;
}
document.getElementById("demo").innerHTML = message;
