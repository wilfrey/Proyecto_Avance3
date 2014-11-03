/*function saveArrayData() {
var myName = document.getElementById("name");
var myAge = document.getElementById("age");
//Creando el arreglo con los datos
var personObject1 = new Object();
personObject1.name = myName.value;
personObject1.age = parseInt(myAge.value);
myArrayObject.push(personObject1);
console.log("Guardando arreglo de datos en localStorage.");
localStorage.setItem("persons", JSON.stringify(myArrayObject));
}
function restoreArrayData() {
divState.innerHTML = "";
console.log("Restaurando arreglo de datos desde localStorage.");
var myArrayObject = JSON.parse(localStorage.getItem("persons"));
for(var i=0; i<myArrayObject.length; i++){
var personObject = myArrayObject[i];
console.log("Nombre: " + personObject.name, "Edad: " +
personObject.age);
divState.innerHTML += "<p>Nombre: " + personObject.name + ", Edad: " +
personObject.age + "</p>";
}
}
*/