"use strict";

const HOTELES = [];

let newHotelName, roomsNumber, floorsNumber, totalArea;

const newHotel = () => {
	
	newHotelName 	= document.getElementById("search").value;
	if (newHotelName == "" || newHotelName == " ") {
		Tools.showNotification(`Introduzca un nombre para el hotel`);
		return;
	}
	for (let i = 0; i < HOTELES.length; i++) {
		if(HOTELES[i].hotelName.toLowerCase() === newHotelName.toLowerCase()){
			Tools.showNotification(`${newHotelName} ya está registrado en la app`);
			return;
		}
	}
	
	roomsNumber 	= Number(prompt("Introduce el numero de habitaciones"));
	floorsNumber	= Number(prompt("Introduce el numero de plantas"));
	totalArea		= Number(prompt("Introduce la superficie total del hotel"));
	
	let hotel = new Hotel(newHotelName, roomsNumber, floorsNumber, totalArea, Tools.randomImage());
	
	HOTELES.push(hotel);
	
	Tools.printToPage(hotel.hotelDesc(Tools.delButton(HOTELES.length - 1), Tools.modButton(HOTELES.length - 1)));
	
	Tools.clearPage("notifications");
	document.getElementById("search").value = "";
	// console.table(HOTELES);
}

const viewHotel = () => {
	
	Tools.clearPage("notifications");
	
	let userHotel = document.getElementById("search").value.toLowerCase();
	if (userHotel == "" || userHotel== " ") {
		Tools.showNotification(`Introduzca un nombre para buscar`);
		return;
	}
	// console.log(userHotel);
	
	let result = "";
	for(let i = 0; i < HOTELES.length; i++) {
		if(userHotel === HOTELES[i].hotelName.toLowerCase()){
			// console.log(appHotel);
			result = HOTELES[i].hotelDesc(Tools.delButton(i),Tools.modButton(i));
			Tools.printToPage(result);
			return;	
		}
	}
	result = `Lo sentimos, el hotel no está registrado en la app`;
	Tools.clearPage("demo");
	Tools.showNotification(result);
}

const modHotel = (num) => {
	
	HOTELES[num].roomsNumber 	= prompt("Introduce el numero de habitaciones");
	HOTELES[num].floorsNumber	= prompt("Introduce el numero de plantas");
	HOTELES[num].totalArea		= prompt("Introduce la superficie total del hotel");
	
	Tools.printToPage(HOTELES[num].hotelDesc(Tools.delButton(num),Tools.modButton(num)));
	// console.table(HOTELES);
}

const deleteHotel = (num) => {
	
	Tools.showNotification(`${HOTELES[num].hotelName}, borrado correctamente`);
	Tools.clearPage("demo");
	
	HOTELES.splice(num,1);
	// console.table(HOTELES);
}