//funcion para guardar los datos cada 7 segundos
var numMensaje=0;

function timer() {
    if( numMensaje<9999999999 ) {
    setTimeout("timer();",7000);//tiempo para guarda
    //determinamos si el tamaño de la ventaja es menor de 800px
    //si es verdadero no mostramos tabla y los controles no funcionaran
    //de lo contratio mostrara la tabla y los conroles funcionaran.
    var mq = window.matchMedia( "(min-width: 800px)" );
        if (mq.matches) {
            document.getElementById("reservas").style.display = "block";
            guardar();//guardamos datos 
        }
        else {
            desh();//limpiamos
        }
    numMensaje++;//aumenta variable
  }
}


function deshabilitar() {
    //deshabilitamos los controles del form
    document.getElementById('correo').disabled = true;
    document.getElementById('totals').disabled = true;
    document.getElementById('tel1').disabled = true;
    document.getElementById("hour").disabled = true;
    document.getElementById("fecha").disabled = true;

}

function habilitar() {
    //habilitmaos los controles del form
    document.getElementById('correo').disabled = false;
    document.getElementById('totals').disabled = false;
    document.getElementById('tel1').disabled = false;
    document.getElementById("hour").disabled = false;
    document.getElementById("fecha").disabled = false;
}


function desh() {
    //Reiniciamos el form & controles
    document.getElementById("reservas").style.display = "none";
    document.getElementById('nom1').value = '';
    document.getElementById('correo').value = '';
    document.getElementById('totals').value = '';
    document.getElementById('tel1').value = '';
    document.getElementById("hour").options[0].selected = true;
}

function iniciar(){
    //al dar click en enviar creaa el nuevfo item y mostrara la tabla de datos
var boton=document.getElementById('Enviarr');
boton.addEventListener('click', nuevoitem, false);
mostrar();
}


//creamos el nuevo dato
function nuevoitem(){
    //varibles para almacenar patron de resultado y valor
var clave=document.getElementById('nom1').value;
var valor=document.getElementById('correo').value;
var pais = document.getElementById('xd').value;
var cantidad = document.getElementById('totals').value;
var pato = document.getElementById('tel1').value;
var payaso = document.getElementById('fecha').value;

//determinamos si los datos estan ncompleto
if (clave != "" && valor!= "" ){
    guardar();//guardamos todos lso datos
    //creamos datos para lamacena en el LocalStorage
    clave = "<tr><td>" + clave;
    valor = "</td><td>" + pais + "</td><td>" + valor + "</td><td>"+ cantidad + "</td><td>" + pato + "</td><td>" + payaso + "</td><td>";
    //Almacenado datos
    localStorage.setItem(clave, valor);

    mostrar();//mostrar tabla con datos

    //limpiuamos cada control
    document.getElementById('nom1').value = '';
    document.getElementById('correo').value = '';
    document.getElementById('totals').value = '';
    document.getElementById('tel1').value = '';
    document.getElementById("hour").options[0].selected = true;
    
    deshabilitar();//reiniciamos input

    //mensaje correspondiente xd
    document.getElementById("validar4").style.display = "none";
    document.getElementById("validar6").style.display = "none";
    document.getElementById("validar5").style.display = "block"; 
} else { 
    document.getElementById("validar6").style.display = "block"; 
    document.getElementById("validar4").style.display = "none";
    document.getElementById('nom1').focus() 
    
    }
}


function guardar() { 
//varibla para lugar de entrada y almacenamiento
var myName = document.getElementById("nom1");
var age = document.getElementById("correo");
var pais = document.getElementById("xd");
var cantidad = document.getElementById('totals');
var pato = document.getElementById('tel1');
var payaso = document.getElementById('fecha');

//verificamos que no es vacio
if (myName.value != "" && age.value != "" && pais.value != "" && pais.value != "Seleccione un pais") {
        //almacenamos los datos en el Localstorage
        localStorage.setItem("nom1", myName.value);
        localStorage.setItem("correo", age.value);
        localStorage.setItem("xd", pais.value);
        localStorage.setItem("totals",cantidad.value);
        localStorage.setItem("tel1",pato.value);
        localStorage.setItem("fecha", payaso.value);

        //limpiamos contoles(input)
        myName.value = "";
        age.value = "";
        pais.value = "";
        cantidad.value = "";
        pato.value = "";
        payaso.value = "";
        document.getElementById("hour").options[0].selected = true;
        deshabilitar();//deshabilitmaos todos
}
}

function mostrar(){
//especificamos el lugar donde los vamos a crear
var cajadatos=document.getElementById('reservas');
//tabla que se creara
var jo = '<h3 id="titulo">Reservas Terminadas</h3><table class=\"cont1\"><tr><td width=\"100px\"><label class=\"buscador\">Buscar reserva: </label></td><td><input class=\"clas\" id=\"searchTerm\" type=\"text\" onkeyup=\"doSearch()\" name=\"search\" title=\"Introduce la palabra a buscar\"></td><td width="70px"><button onclick="eliminarTodo()" class="miller">Eliminar Todo</button></td></tr></table><br>';
cajadatos.innerHTML = ''+jo+'<div class=\'cant\'><table id=\"cont1\"><tr><th>Nombre</th><th>Hora</th><th>Correo</th><th>Cantidad</th><th>Teléfono</th><th>Fecha</th><th width=\"10px\">Eliminar</th></tr></table></div>';

//mostrandos los datos almacenados exeptuando 6 datos lso cuales son, los que almacenan
//los ultimos datos agregados al LocalStorage
for(var f=0;f<localStorage.length-6;f++){
//creamos las celdas
var clave=localStorage.key(f);
var valor=localStorage.getItem(clave);
var tabla = document.getElementById('cont1');
//creamos todo el datos mas un boton para eliminar ese dato
tabla.innerHTML+= clave+valor+'<button onclick="eliminar(\''+clave+'\')" class="cansier">Eliminar</button></td></tr>';
}
}

function obtener() {
    habilitar();//habilitamos los controles
    //variable para guardar dato del LocalStorage
    var myName = document.getElementById("nom1");
    var age = document.getElementById("correo");
    var pais = document.getElementById("xd");
    var cantidad = document.getElementById('totals');
    var pato = document.getElementById('tel1');
    var payaso = document.getElementById('fecha');

    //Mostrar cada dato en el lugar respectivo ademas de obtener lso valores
    myName.value = localStorage.getItem("nom1");
    age.value = localStorage.getItem("correo");
    pais.value = localStorage.getItem("xd");
    cantidad.value = localStorage.getItem("totals");
    pato.value = localStorage.getItem("tel1");
    payaso.value = localStorage.getItem("fecha");

    //muestra la opcion seleccionada
    var jk = pais.value;
    switch(jk){
        case "13:30": document.getElementById("hour").options[1].selected = true;break;
                        case "14:00": document.getElementById("hour").options[2].selected = true;break;
                        case "14:30": document.getElementById("hour").options[3].selected = true;break;
                        case "15:00": document.getElementById("hour").options[4].selected = true;break;
                        case "15:30": document.getElementById("hour").options[5].selected = true;break;
                        case "16:00": document.getElementById("hour").options[6].selected = true;break;
                        case "xd": document.getElementById("hour").options[7].selected = true;break;
                        case "21:00": document.getElementById("hour").options[8].selected = true;break;
                        case "21:30": document.getElementById("hour").options[9].selected = true;break;
                        case "22:00": document.getElementById("hour").options[10].selected = true;break;
                        case "22:30": document.getElementById("hour").options[11].selected = true;break;
                        case "23:00": document.getElementById("hour").options[12].selected = true;break;
                        case "23:30": document.getElementById("hour").options[13].selected = true;break;
                        default:document.getElementById("hour").options[0].selected = true;  
    }

    //si esta vacio o no el almacenamiento
    if (myName.value == "" && age.value == "" && pais.value == "" && cantidad.value == "" && pato.value == "" && payaso.value == "") {
        deshabilitar();//no muestra nada y deshabilitada datos
    } else {
        habilitar();//habilita datos y muestra info
    }
}


//para eliminar todo o un dato especifico
//confirma si desea borrar
function eliminar(clave){
if(confirm('Está Seguro?')){
localStorage.removeItem(clave);//remueve el dato especificado
mostrar();//muestra el dato
}
}


function eliminarTodo(){
if(confirm('Está Seguro?')){
localStorage.clear();//limpia toda la base de dato
mostrar();//muestra la tabla limpia
}
}


function get() {
    obtener();//llama la funcion obtner
}


window.addEventListener('load', iniciar, false);///al refresacar o reiniciar pagiana (ventana)


//guardar la varible del lugar donde se utilizara
function matriz() { 
    var forma = document.contact_form.hour.options[document.contact_form.hour.selectedIndex].value;
    document.getElementById("xd").value= forma;
    alert(forma);
}

//funcion para buscar al reservante
function doSearch() {
         var tableReg = document.getElementById('cont1');
         var searchText = document.getElementById('searchTerm').value.toLowerCase();
         var cellsOfRow = "";
         var found = false;
         var compareWith = "";

         // Recorremos todas las filas con contenido de la tabla
         for (var i = 1; i < tableReg.rows.length; i++) {
             cellsOfRow = tableReg.rows[i].getElementsByTagName('td');
             found = false;
             // Recorremos todas las celdas
             for (var j = 0; j < cellsOfRow.length && !found; j++) {
                 compareWith = cellsOfRow[j].innerHTML.toLowerCase();
                 // Buscamos el texto en el contenido de la celda
                 if (searchText.length == 0 || (compareWith.indexOf(searchText) > -1)) {
                     found = true;
                 }
             }
             if (found) {
                 tableReg.rows[i].style.display = '';
             } else {
                 // si no ha encontrado ninguna coincidencia, esconde la
                 // fila de la tabla
                 tableReg.rows[i].style.display = 'none';
             }
         }
     }