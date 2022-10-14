// Crea un programa on l’usuari introdueixi una temperatura en ºC i es mostri per pantalla la conversió en ºFahrenheit

// Fórmula
	
// (32 °C × 9 / 5) + 32 = 89,6 °F
"use strict"

let main = () => {
	
	let fahrenheit = getFahrenheit("temperatura");
	
	document.getElementById("demo").innerHTML = `La temperatura en Fahrenheit es: ${fahrenheit} °F`;
	
}

let getFahrenheit = (a) => {
	
	let temperature = Number(document.getElementById(a).value);
	
	let toFahrenheit = (temperature * (9/5)) + temperature;
	
	return toFahrenheit;
	
}