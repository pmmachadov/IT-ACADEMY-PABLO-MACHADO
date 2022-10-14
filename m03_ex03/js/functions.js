const NOTAS_ALUMNO = [];

NOTAS_ALUMNO[0] = Number(prompt("Primera nota para calcular la media"));
NOTAS_ALUMNO[1] = Number(prompt("Segunda nota para calcular la media"));
NOTAS_ALUMNO[2] = Number(prompt("Tercera nota para calcular la media"));

let mediaAlumno = NOTAS_ALUMNO[0]+NOTAS_ALUMNO[1]+NOTAS_ALUMNO[2];

document.getElementById("message").innerHTML = "La media de notas del alumno es: " + (mediaAlumno / NOTAS_ALUMNO.length);
