// Una escola d’idiomes concedeix beques a futurs estudiants si compleixen una sèrie de requisits.
// A l'alumne se li assigna una beca si és major d’edat i si té un títol universitari. O també se li assigna una beca si l’alumne està a l’atur.
// El programa demana les tres dades per pantalla i en finalitzar mostra si l’alumne té la beca o no.

// Obviamos el prompt de momento
let studentAge = 18;
let isGraduated = true;
let isUnemployed = false;
let resultMessage;
let demoTag = document.getElementById("demo");

if (isUnemployed) {
	resultMessage = "Tienes beca!";
} else if (studentAge >= 18 && isGraduated) {
	resultMessage = "Tienes beca!";
} else {
	resultMessage = "Lo sentimos, no puedes optar a beca";
}

demoTag.innerHTML = resultMessage;
