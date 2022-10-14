// Fer un programa que demani a l’usuari quin dia i quin mes va néixer, amb aquesta informació el programa mostra per pantalla, de quin signe del zodíac és.
// Aquari-Acuario (20.01 — 18.02)
// Peixos-Piscis (19.02 — 20.03)
// Àries-Aries (21.03 — 19.04)
// Taure-Tauro (20.04 — 20.05)
// Bessons-Géminis (21.05 — 20.06)
// Cranc-Cáncer (21.06 — 22.07)
// LLeó-Leo (23.07 — 22.08)
// Verge-Virgo (23.08 — 22.09)
// Balança-Libra (23.09 — 22.10)
// Escorpi-Escorpio (23.10 — 21.11)
// Sagitario-Sagitario (22.11 — 21.12)
// Capricorn-Capricornio (22.12 — 19.01)

function calcSign() {
	let bdDay = Number(document.getElementById("bdday").value);
	let bdMonth = Number(document.getElementById("bdmonth").value);
	let resultado;

	switch (bdMonth) {
		case 1:
			bdDay >= 20 ? (resultado = "Acuario") : (resultado = "Capricornio");
			break;
		case 2:
			bdDay >= 19 ? (resultado = "Piscis") : (resultado = "Acuario");
			break;
		case 3:
			bdDay >= 21 ? (resultado = "Aries") : (resultado = "Piscis");
			break;
		case 4:
			bdDay >= 20 ? (resultado = "Tauro") : (resultado = "Aries");
			break;
		case 5:
			bdDay >= 21 ? (resultado = "Geminis") : (resultado = "Tauro");
			break;
		case 6:
			bdDay >= 21 ? (resultado = "Cancer") : (resultado = "Geminis");
			break;
		case 7:
			bdDay >= 23 ? (resultado = "Leo") : (resultado = "Cancer");
			break;
		case 8:
			bdDay >= 23 ? (resultado = "Virgo") : (resultado = "Leo");
			break;
		case 9:
			bdDay >= 23 ? (resultado = "Libra") : (resultado = "Virgo");
			break;
		case 10:
			bdDay >= 23 ? (resultado = "Escorpio") : (resultado = "Libra");
			break;
		case 11:
			bdDay >= 22 ? (resultado = "Sagitario") : (resultado = "Escorpio");
			break;
		case 12:
			bdDay >= 22 ? (resultado = "Capricornio") : (resultado = "Sagitario");
			break;
		default:
			resultado = "Imposible calcular con los datos introducidos";
	}

	if (bdDay == 0) {
		resultado = "Imposible calcular con los datos introducidos";
	}

	document.getElementById("demo").innerHTML = resultado;
}
