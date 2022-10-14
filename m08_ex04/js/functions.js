"strict mode";

const BUILDINGS	= [];

const createHospital = () => {
	//name, floors, area, patients
	let name 		= prompt("Nombre del hospital"),
		floors		= Number(prompt("¿Número de plantas?, calle es planta 1")),
		area		= Number(prompt("¿Superficie del hospital?")),
		patients	= Number(prompt("¿Pacientes ingresados actualmente?"));
		
	// To do: @here validaciones de input
	
	let hospital = new Hospital(name, floors, area, patients);
	BUILDINGS.push(hospital);
	
	hospital.printToPage("results", hospital.toDOM());
	
	console.table(BUILDINGS);
}

const createCinema = () => {
	//name, floors, area, capacity
	let name 		= prompt("Nombre del cine"),
		floors		= Number(prompt("¿Número de plantas?, calle es planta 1")),
		area		= Number(prompt("¿Superficie del cine?")),
		capacity	= Number(prompt("¿Cual es el aforo?"));
		
	// To do: @here validaciones de input
	
	let cinema = new Cinema(name, floors, area, capacity);
	BUILDINGS.push(cinema);
	
	cinema.printToPage("results", cinema.toDOM());
	
	console.table(BUILDINGS);
}

const doMovieSession = (license) => {
	
	let cinema 		= BUILDINGS.find(c => c.license === license);
		
	let attendees 	= prompt("Número de asistentes a la pelicula"),
		ticketPrice = prompt("Precio de la entrada"),
		collected 	= cinema.movieSession(attendees, ticketPrice);
	
	if(collected == null) {
			return
	}
	
	collected = `<li>${collected}</li>`;
	cinema.printToPage(`movie-session-${cinema.license}`, collected);
}

const createHotel = () => {
	//name, floors, area, rooms
	let name 		= prompt("Nombre del hotel"),
		floors		= Number(prompt("¿Número de plantas?, calle es planta 1")),
		area		= Number(prompt("¿Superficie del hotel?")),
		rooms		= Number(prompt("¿Número de habitaciones?"));
		
	// To do: @here validaciones de input
		
	let hotel = new Hotel(name, floors, area, rooms);
	BUILDINGS.push(hotel);
	
	hotel.printToPage("results", hotel.toDOM());
	
	console.table(BUILDINGS);
}

const deleteBuilding = (license) => {
	// let license = Number(prompt("Introduce el número de licencia del edificio que quieres eliminar"));
	
	let buildingIndex 	= BUILDINGS.findIndex(b => b.license === license),
		building 		= BUILDINGS.find(b => b.license === license);
		
	// To do: @here validacion en caso de no encontrar coincidencias
	
	building.removeFromPage(`element-${building.license}`);
	
	BUILDINGS.splice(buildingIndex, 1);
	
	console.table(BUILDINGS);

}