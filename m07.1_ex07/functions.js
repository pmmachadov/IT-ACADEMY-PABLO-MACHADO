// Fer un programa on l’usuari introdueix per pantalla un caràcter i un número. El programa imprimeix per pantalla un quadrat amb la mida i el caràcter introduïts per l’usuari.

// Exemple:

// % % % % %

// % % % % %

// % % % % %

// % % % % %

// % % % % %

let main = () => {
	
	document.getElementById("demo").innerHTML = "";
	
	let input = getInput("caracter","numero");
	
	drawOut(input);
	
};

let getInput = (a,b) => {
	
	let caracter = document.getElementById(a).value,
		numero = Number(document.getElementById(b).value);
	
	return [caracter, numero];
	
};

let drawOut = (a) => {
	
	let caracter = a[0],
		numero = a[1],
		row = "";
		
		for(let i = 0; i < numero; i++) {
			for(let x = 0; x < numero; x++) {
				row += caracter;
			}
			row += "<br>"
		}
		
	document.getElementById("demo").innerHTML = `${row}`;
}