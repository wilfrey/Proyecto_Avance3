//Datos de los creadores de la pagina
var creadores = {
"Titulo": "Creadores",
"Personas": [
{"imagen" : "img/creador3.png",
"nombre" : "Wilver",
"apellido" : "Gonzalez",
"profesion" : "Estudiante de la UDB, cursa Tec. en Ingenieria en Computación. Proyecto LIC."},
{"imagen" : "img/creador1.jpg",
"nombre" : "Engelberto",
"apellido" : "Velasquez",
"profesion" : "19 años de edad estudiante de la UDB, Ciclo 2"},
{"imagen" : "img/creador2.jpg",
"nombre" : "Dennis",
"apellido" : "Figueroa",
"profesion" : "Estudiante de la UDB de 17 años, creación de estilo."},
{"imagen" : "img/creador4.jpg",
"nombre" : "Mario",
"apellido" : "Gochez",
"profesion" : "Creador de formulario de reserva y mantenimiento."}
]
};

//Llamandos a los creadores
creador1(creadores.Personas);


//funcion creada para crear y mostrar los creadores
function creador1(Datos) {
    //muestra el titulo creadores
    document.getElementById("titulo").innerHTML = creadores.Titulo;
    //Datos creador 1
    document.getElementById("cr1").innerHTML = "<img src=\"" + Datos[3].imagen + "\"/>";
    document.getElementById("nom9").innerHTML = "" + Datos[3].nombre+ " "+Datos[3].apellido +"";
    document.getElementById("prof0").innerHTML=Datos[3].profesion;

    //Datos creador 2
    document.getElementById("cr2").innerHTML = "<img src=\"" + Datos[2].imagen + "\"/>";
    document.getElementById("nom10").innerHTML = "" + Datos[2].nombre+ " "+Datos[2].apellido +"";
    document.getElementById("prof1").innerHTML=Datos[2].profesion;

    //Datos creador 3
    document.getElementById("cr3").innerHTML = "<img src=\"" + Datos[1].imagen + "\"/>";
    document.getElementById("nom11").innerHTML = "" + Datos[1].nombre+ " "+Datos[1].apellido +"";
    document.getElementById("prof2").innerHTML=Datos[1].profesion;

    //Datos creador 4
     document.getElementById("cr4").innerHTML = "<img src=\"" + Datos[0].imagen + "\"/>";
    document.getElementById("nom12").innerHTML = "" + Datos[0].nombre+ " "+Datos[0].apellido +"";
    document.getElementById("prof3").innerHTML=Datos[0].profesion;

}
