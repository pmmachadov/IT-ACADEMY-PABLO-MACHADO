let userName = prompt("¿Como te llamas?");
let userLastName = prompt("¿Cual es tu apellido?");
let userAge = prompt("¿Que edad tienes?");
let userDataField = document.getElementById("userdata");
let alertMessage = "Soy" + " " + name + " " + userLastName + " y tengo" + " " + userAge;

userDataField.innerHTML = alertMessage;
console.log(alertMessage);
window.alert(alertMessage);