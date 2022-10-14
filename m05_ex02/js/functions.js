// Codigo JS
// El programa demana dos números enters i llavors calcula la suma dels valors compresos entre els dos números, inclosos.
// Exemple: 4 i 6 --> resultat = 4 + 5 + 6 = 15

let firstNumber = Number(prompt("Primer número"));
let secondNumber = Number(prompt("Segundo número"));
let resultado = 0;
let minNum;
let maxNum;

if (firstNumber > secondNumber) {
	maxNum = firstNumber;
	minNum = secondNumber;
} else {
	maxNum = secondNumber;
	minNum = firstNumber;
}

for (i = minNum; minNum <= maxNum; minNum++) {
	resultado = resultado + i;
	i++;
	document.write(`${minNum} `);
}

document.getElementById("demo").innerHTML = resultado;
