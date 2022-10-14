"use strict";

class Hotel {
	constructor(hotelName, roomsNumber, floorsNumber, totalArea, imageURL) {
		this._hotelName 	= hotelName;
		this._roomsNumber 	= roomsNumber;
		this._floorsNumber 	= floorsNumber;
		this._totalArea 	= totalArea;
		this._imageURL 		= imageURL;
	}

	get hotelName() {
		return this._hotelName;
	}
	
	set hotelName(hotelName) {
		this._hotelName = hotelName;
	}

	get roomsNumber() {
		return this._roomsNumber;
	}

	set roomsNumber(roomsNumber) {
		this._roomsNumber = roomsNumber;
	}

	get floorsNumber() {
		return this._floorsNumber;
	}

	set floorsNumber(floorsNumber) {
		this._floorsNumber = floorsNumber;
	}

	get totalArea() {
		return this._totalArea;
	}

	set totalArea(totalArea) {
		this._totalArea = totalArea;
	}
	
	get imageURL() {
		return this._imageURL;
	}
	
	set imageURL(imageURL) {
		this._imageURL = imageURL;
	}
	
	calcMaintenance() {
		const SERVICE_SALARY = 1500;

		let roomServicePersonal = Math.ceil(this.roomsNumber / 20),
			personal = roomServicePersonal > 1 ? "personas" : "persona",
			roomServiceCost = roomServicePersonal * SERVICE_SALARY;

		return `Para ${this.roomsNumber} habitaciones es necesario ${roomServicePersonal} ${personal} de servicio, el coste total: ${roomServiceCost} € al mes.`;
	}
	
	hotelDesc(delButton, modButton) {
		return `
		<div class="overflow-hidden position-relative px-4 pb-4 border shadow-sm rounded-3">
		<span class="position-absolute p-4 top-0 end-0">${delButton}${modButton}</span>
		<div style="margin: 0 -1.5rem 0"><img class="img-fluid mb-3" src="${this.imageURL}"></div>
		<h1>${this.hotelName} <span class="fs-6 align-top" style="vertical-align:super!important">⭐⭐⭐⭐⭐</span></h1>
	
		<p class="mb-4">El hotel ${this.hotelName} cuenta con ${this.roomsNumber} habitaciones, ${this.floorsNumber} plantas y una superficie de ${this.totalArea} m²</p>

		<h5>Mantenimiento</h5>
		
		${this.calcMaintenance()}
		</div>
		`;
	}
}
