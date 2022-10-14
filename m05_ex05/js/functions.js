	// Codigo JS

			// Has de modificar el programa de les beques (ara el programa només ha de poder donar 5 beques).

			// El programa anirà demanant les dades dels alumnes fins que es donin aquestes 5 beques. Un cop el programa hagi assignat les 5 beques s’ha de mostrar per pantalla els noms dels 5 alumnes que tenen beca.

			let becaProgram = () => {

				let studentName = document.getElementById("name").value;
				let studentAge = Number(document.getElementById("age").value);
				let isGraduated = Boolean(document.getElementById("graduated").checked);
				let isUnemployed = Boolean(document.getElementById("unemployed").checked);
				let resultMessage;
				let becas = Number(document.getElementById("becas").value);

				if (studentAge == 0 || studentName == "") {
					alert("Rellenas los campos");
					return;
				}

				const CANDIDATE = {
					name: studentName,
					age: studentAge,
					graduate: isGraduated,
					unemployed: isUnemployed,
				};

				if (becas == 0) {
					resultMessage = `¡${CANDIDATE.name}, lo sentimos becas agotadas! 😥<br>`;
					document.getElementById("demo").innerHTML += resultMessage;
					document.getElementById("send").disabled = true;
					return;
				}

				if ((CANDIDATE.age >= 18 && CANDIDATE.graduate) || (CANDIDATE.age >= 18 && CANDIDATE.unemployed)) {
					resultMessage = `¡${CANDIDATE.name}, tienes beca!<br>`;
					document.getElementById("becas").value = (becas - 1);
				} else {
					resultMessage = `¡${CANDIDATE.name}, lo sentimos no apto para beca! 😥<br>`;
				}

				document.getElementById("demo").innerHTML += resultMessage;
			}