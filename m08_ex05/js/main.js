"strict mode";

// Para imprimir en pantalla más comodo
const printToPage = (id, content) => {
	document.getElementById(id).innerHTML = content;
};

// Iterar numeros y separarlos segun condiciones
const splitNumbers = () => {
	const array1 = [];
	const array2 = [];

	// Iteramos
	for (let i = 100, j = 0; i > j; i--) {
		if (i % 5 === 0) {
			array1.push(i);
			
			if (i % 3 === 0) {
				array2.push(i);
			}
		}
	}

	// Ordenamos ascendente
	array2.sort((a, b) => a - b);

	// Imprimimos
	printToPage("array1", array1.join(","));
	printToPage("array2", array2.join(","));
};

// Buscamos Pep
const searchingPep = () => {
	// Buscamos en el array de objetos, el objeto que cumpla con los criterios
	let persona = treballadors.find(t => {
		return t.nom === "Pep" && t.cognom === "Vila";
	});

	// Imprimimos
	printToPage("nom1", persona.nom);
	printToPage("cognoms1", persona.cognom);
	printToPage("carrec1", persona.carrec);
	printToPage("trasllat1", persona.disponibilitatTrasllat);

	// console.log(persona);
};

// Buscamos trabajadores que puedan trasladarse
const transferAvailable = () => {
	// Buscamos en el array de objetos, el objeto que cumpla con los criterios
	let trabajadores = treballadors.filter(t => t.disponibilitatTrasllat == true);

	// Es un array no un objeto
	for (let trabajador of trabajadores) {
		console.log(trabajador.nom);
	}
};

// Generamos una instancia de la clase Trabajador
const newEmployee = () => {
	let employee = new Trabajador("Albert", "Corral", "Profesor", false);

	printToPage("nom2", employee.nom);
	printToPage("cognoms2", employee.cognom);
	printToPage("carrec2", employee.carrec);
	printToPage("trasllat2", employee.disponibilitatTrasllat);
};

// Instancias en dades.js

let trabajador1 = new Trabajador("Ana", "Puig", "venedor(a)", true);
let trabajador2 = new Trabajador("Lluis", "Soto", "venedor(a)", false);
let trabajador3 = new Trabajador("Cristina", "Tomas", "administratiu(a)", false);
let trabajador4 = new Trabajador("Andreu", "Ricart", "venedor(a)", true);
let trabajador5 = new Trabajador("Pep", "Vila", "venedor(a)", false);
let trabajador6 = new Trabajador("Núria", "Roure", "administratiu(a)", true);
