"use strict";

class Tools {
	constructor(){}
	
	static showNotification(str = "") {
		document.getElementById("notifications").innerHTML = str;
		document.getElementById("notifications").classList.remove("d-none");
	}

	static printToPage(str) {
		document.getElementById("demo").innerHTML = str;
	}
	
	static addToPage(str) {
		 document.getElementById("demo").innerHTML += str;
	}
	
	static clearPage(element = "demo") {
		document.getElementById(element).innerHTML = "";
	}
	
	static delButton(num) {
		return `<button class="shadow-sm align-top btn btn-danger btn-sm" onclick="deleteHotel(${num})"><i class="bi bi-trash"></i> Borrar</button>`
	}
	
	static modButton(num) {
		return `<button class="shadow-sm ms-2 align-top btn btn-warning btn-sm" onclick="modHotel(${num})"><i class="bi bi-pencil-square"></i> Modificar</button>`
	}
	
	static randomImage() {
		
		const IMAGES_URLS = [
		"https://live.staticflickr.com/8153/7186291561_cd0e7f837d_b.jpg",	
		"https://live.staticflickr.com/2811/9122619801_52b45a25b4_k.jpg",	
		"https://live.staticflickr.com/1895/29867996727_05dfd54796_k.jpg",	
		"https://live.staticflickr.com/4077/4783341357_43aa91aed3_b.jpg",	
		"https://live.staticflickr.com/3312/3654914519_5e62756454_k.jpg",	
		"https://live.staticflickr.com/4624/39220005375_4604d8a57b_k.jpg",	
		"https://live.staticflickr.com/4607/40162094421_a25c2fbc2a_b.jpg",	
		"https://live.staticflickr.com/4010/4680742522_70523293d5_b.jpg",	
		];
		
		let randomNumber = Math.floor(Math.random() * IMAGES_URLS.length);
		// console.log(randomNumber);
		
		return IMAGES_URLS[randomNumber];
	}
	
}