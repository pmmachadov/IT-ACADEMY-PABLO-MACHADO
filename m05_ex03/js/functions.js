// Codigo JS
// Aquesta línia de codi: Math.ceil((Math.random() * 10));  Retorna un número entre el 0 i el 10 de forma aleatòria.
// L’exercici consisteix a què l’usuari ha d'endevinar el número escollit aleatòriament pel programa.
// El programa, demana números a l’usuari fins que aquest encerti el número aleatori generat pel programa.
// Un cop l’usuari ha endevinat el número, es mostrarà per pantalla el següent missatge: “Enhorabona, el número era X”

let programNumber = Math.ceil(Math.random() * 10);
let userNumber;

while (programNumber != userNumber) {
	userNumber = Number(prompt("Introduce un número"));
}

document.getElementById("demo").innerHTML = `Enhorabona, el número era ${programNumber}`;
