// Mostra per pantalla els nombres parells compresos entre el 100 i el 0 en ordre descendent.

let main = () => {
	
	let contador = 100;

	while(0 <= contador) {
		if(contador % 2 == 0) {
			document.getElementById("demo").innerHTML += `${contador}<br>`;
		}
		contador--;
	}

	document.getElementById("boton").disabled = true;
	
};
