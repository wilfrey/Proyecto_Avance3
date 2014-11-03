//funcion para iniciar
function iniciar(){
var boton=document.getElementById('sended');
boton.addEventListener('click', envio, false);
mostrar();
}

//Esta funcion es tomar el tiempo de la pagina
//ademas es utilizada para guardar los datos cada 8 segundos
//Tambien determinar el responsive design de la pagina x lo tanto si la ventanas
// es menor que 800px entonces las tablas de reserva y contacto no se podra visualizar
function cambiar() { 
    setTimeout("cambiar();",8000);
    var mq = window.matchMedia( "(min-width: 800px)" );
        if (mq.matches) {
            document.getElementById("texto4").style.display = "block";
            guardar();
        }
        else {
            desh();
        }
}


//Es funcion es utilizada para limpiar los achivos
function desh() {
    document.getElementById("texto4").style.display = "none";
    document.getElementById('nom').value="";
    document.getElementById('msg').value="";
    document.getElementById('asunto').value="";
    document.getElementById('coreo').value="";
}

//Para almacenar los datos primero debemos de verificar que este completo
// y correctamente bien sino se muestra el aviso correspondiente
function envio() {
    var j = document.contact_form;
    if (j.nom.value != "" && j.asun.value != "" && j.email.value != "" && j.message.value != "") {
        document.getElementById("validar2").style.display = "block";
        nuevoitem();
    } else { 
     document.getElementById("validar3").style.display = "block";
     document.getElementById("validar").style.display = "none";
    }
}//fin de function envio


//crea el nuevo item o dato que se almacenara
function nuevoitem(){
var clave=document.getElementById('nom').value;
var valor=document.getElementById('asunto').value;

if (clave != "" && valor!= "" ){
    guardar(); //guardamos el dato creado pra volver a llamar


    //creamos la datos a Almacenar
    clave = "<tr><td>" + clave;
    valor = "</td><td>" + valor + "</td><td>";

    //guardamos los datos al sessionstorage
    sessionStorage.setItem(clave, valor);
    mostrar();//mostramos la tabla con los dato obteniudos

    //limpiamos input
    document.getElementById('nom').value = '';
    document.getElementById('asunto').value = '';
    document.getElementById('coreo').value = '';
    document.getElementById('msg').value = '';
    deshabilitar();
} else { 
    //mensaje de que es neceario completar el formulario
    document.getElementById("validar3").style.display = "block";
    document.getElementById('nom').focus();

    }
}

function habilitar() { 
    //utilizado para habilitar los input al modificar o habilitar algo xd
    document.getElementById('asunto').disabled=false;
    document.getElementById('coreo').disabled=false;
    document.getElementById('msg').disabled=false;
}

function deshabilitar() { 
    //reiniciamos el controls ("bloqueamos hasta que sea correcto")
    document.getElementById('asunto').disabled=true;
    document.getElementById('coreo').disabled=true;
    document.getElementById('msg').disabled=true;
}

function guardar() { 
//utilizado para alamcenar los ultimos datos ingresados en el formulario
var myName = document.getElementById("nom");
var age = document.getElementById("asunto");
var pais = document.getElementById("coreo");
var cantidad = document.getElementById('msg');

//verificamos que no se guarde datos vacios
if (myName.value != "" && age.value != "" && pais.value != "" && pais.value != "Seleccione un pais") {
        sessionStorage.setItem("nom", myName.value);
        sessionStorage.setItem("asunto", age.value);
        sessionStorage.setItem("coreo", pais.value);
        sessionStorage.setItem("msg",cantidad.value);
        myName.value = "";
        age.value = "";
        pais.value = "";
        cantidad.value = "";
        deshabilitar();//llamamos la funcion deshabilitar
}
}

//muestra todos los datos en el storage xd
function mostrar(){
//var cajadatos=document.getElementById('cajadatos');
//cajadatos.innerHTML='<div><button onclick="eliminarTodo()">Eliminar Todo</button></div>';
var cajadatos=document.getElementById('texto4');
var jo = '<h3 id="titulo">Correo Enviados</h3><table class=\"cont1\"><tr><td width=\"10px\"><label class=\"buscador\">Buscar: </label></td><td width="70px"><input class=\"clas\" id=\"searchTerm\" type=\"text\" onkeyup=\"doSearch()\" name=\"search\" title=\"Introduce la palabra a buscar\"></td><td width="10px"><button onclick="eliminarTodo()" class="payaso">Eliminar Todo</button></td></tr></table><br>';
cajadatos.innerHTML = ''+jo+'<div class=\'cant\'><table id=\"cont1\"><tr><th>Nombre</th><th>Asunto</th><th width=\"10px\">Eliminar</th></tr></table></div>';
for(var f=0;f<sessionStorage.length-4;f++){
var clave=sessionStorage.key(f);
var valor=sessionStorage.getItem(clave);
//cajadatos.innerHTML+='<div class=\'cant\'>'+clave+' <button onclick="eliminar(\''+clave+'\')">Eliminar</button><br> '+valor+'<br></div>';
var tabla = document.getElementById('cont1');
tabla.innerHTML+= clave+valor+'<button onclick="eliminar(\''+clave+'\')" class="cansier1">Eliminar</button></td></tr>';
}
}

//guardamos cada uno de los datos en una vabible para despues subir datos in guardar
function obtener() {
    habilitar();//habilitamos controles

    //En esta parte tomamos los ultimos valores guardados y lo mostrmaos
    //en su control correspondiente
    var myName = document.getElementById("nom");
    var age = document.getElementById("asunto");
    var pais = document.getElementById("coreo");
    var cantidad = document.getElementById('msg');
    myName.value = sessionStorage.getItem("nom");
    age.value = sessionStorage.getItem("asunto");
    pais.value = sessionStorage.getItem("coreo");
    cantidad.value = sessionStorage.getItem("msg");

    //si esta vacio no muestra nada y los controles se bloquean
    if (myName.value == "" && age.value == "" && pais.value == "" && cantidad.value == "") {
        deshabilitar();
    } else {
        habilitar();
    }
}

//funcion para elimna un dato del storage
function eliminar(clave){
if(confirm('Está Seguro?')){
sessionStorage.removeItem(clave); //eliminamos el dato con su clave o valor
mostrar();//mostamos la tabla limpia
}
}

//funcion para eliminar todos los datos del storage
function eliminarTodo(){
if(confirm('Está Seguro?')){
sessionStorage.clear();//borramos todos los datos del sessionstorage
mostrar();//mostrar la tabla limpia
}
}

//funcion para obtener los valores guardados
function get() {
    obtener();
    document.getElementById("validar").style.display = "none";
    document.getElementById("validar2").style.display = "none";
    document.getElementById("validar3").style.display = "none";
}

//si se reiniciar el form
window.addEventListener('load', iniciar, false);

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