// Codigo JS
// Fer un programa amb una caixa de text i un botó
// L’usuari introdueix el nombre de paraules que vol introduir en el camp de text, al fer clic en el botó apareixen tants “prompts” com el nombre de paraules que ha dit l’usuari que volia introduir.
// Les paraules es guarden en un array i un cop han sigut totes introduïdes, es mostren per pantalla.

function printWords() {
	let userInput = Number(document.getElementById("textinput").value);
	const PARAULES = [];

	for (let i = 0; i < userInput; i++) {
		let inputWord = prompt("Ingresar palabra");
		PARAULES[i] = ` ${inputWord}`;
	}
	document.getElementById("demo").innerHTML = PARAULES;
}
