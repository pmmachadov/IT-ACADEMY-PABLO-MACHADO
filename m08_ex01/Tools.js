"use strict";

class Tools {
	constructor(){}
	
	printToPage(string) {
		document.getElementById("demo").innerHTML = string;
	}
	
	clearPage() {
		document.getElementById("demo").innerHTML = "";
	}
	
}