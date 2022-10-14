// Codigo JS

// Fes un programa amb 3 funcions. El programa ha de cridar a les 3 funcions e interactuar amb ells de la següent manera:

// a. Crea una funció sense paràmetres i sense retorn que imprimeixi per consola “sóc una funció”.
// 	Sortida: sóc una funció
let helloWorld = () => console.log("Sóc una funció");
helloWorld();

// b. Crea una funció que rebi un array de números com a paràmetre, imprimeixi el número més gran per consola i retorni l’índex de l’array on es troba el número més petit. Crea un array de 5 números i crida a la funció que acabes de crear per imprimir el número més petit de l’array.
// Sortida (amb aquests números dintre de l’array “8, 12, 5, 22, 6”:
// Número més gran 22 (això ho imprimeix el propi mètode)
// Número més petit 5  (això ho imprimeix on s'ha fet la crida al mètode)
let minMaxNumbers = (...arr) => {
	let arrSize = arr.length;
	let maxNum = 0;
	let minNum = arr[0];

	for (let i = 0; i < arrSize; i++) {
		if (arr[i] > maxNum) {
			maxNum = arr[i];
		}
	}
	console.log(`Número més gran: ${maxNum}`);

	for (let i = 0; i < arrSize; i++) {
		if (arr[i] < minNum) {
			minNum = arr[i];
		}
	}
	let minNumIndex = arr.findIndex(a => a == minNum);
	let result = `Número més petit: ${minNum} y su index ${minNumIndex}`;
	return result;
};
document.getElementById("demo").innerHTML += "Función b:<br>" + minMaxNumbers(8, 12, 5, 22, 6);

// c. Crea una funció que rebi dos números com a paràmetres i retorni un array amb tots els números compresos entre ells.
// Crida a la funció que acabes de crear amb els dos números que vulguis i imprimeix l’array que et retorna.
// Sortida (amb el núm 2 i 10):
// Els números compresos entre 2 i 10 són: 3, 4, 5, 6, 7, 8, 9

let betweenNumbers = (a, b) => {
	let firstArg = a;
	let secondArg = b;
	let aux = 0;

	if (firstArg > secondArg) {
		aux = secondArg;
		secondArg = firstArg;
		firstArg = aux;
	}

	const numbersBetween = [];

	while (firstArg < secondArg) {
		firstArg++;
		if (firstArg === secondArg) {
			break;
		}
		numbersBetween.push(firstArg);
	}

	return numbersBetween;
};
document.getElementById("demo").innerHTML += "<br><br> Función c:<br>" + betweenNumbers(10, 2);
