////////////// validaciones con function, if Y expresiones regulares

function texto1(e){ 
    if (window.event) {keyval=e.keyCode}
    else
    if (e.which) {keyval=e.which}
    if (keyval == "13") {
    if (document.contact_form.nom1.value == "") {
        document.getElementById("validar4").style.display = "block";
    } else { 
    var f = document.contact_form.nom1.value;
    validaSoloTexto1(f);
    }
 }
}//fin de funcion texto

function validaSoloTexto1(cadena) { 
    var patron = /^[a-zA-Z\s]*$/;
  // En caso de querer validar cadenas con espacios usar: /^[a-zA-Z\s]*$/
  if (!cadena.search(patron)){
      document.getElementById("validar4").style.display = "none";
      document.getElementById("validar5").style.display = "none";
      document.getElementById("validar6").style.display = "none";
      document.contact_form.fecha.disabled = false;
      document.contact_form.fecha.focus();
  }  
  else
      document.getElementById("validar4").style.display = "block";
}

function validas(e){
if (window.event) {keyval=e.keyCode}
else
if (e.which) {keyval=e.which}
if (keyval == "13") {
    if (document.contact_form.fecha.value == "" || document.contact_form.fecha.value=="dd/mm/aaaa") {
        document.getElementById("validar4").style.display = "block";
    } else {
        document.getElementById("validar4").style.display = "none";
        document.contact_form.tot.disabled = false;
        document.contact_form.tot.focus();
    }
 }
}


function validas2(e){
if (window.event) {keyval=e.keyCode}
else
if (e.which) {keyval=e.which}
if (keyval == "13") {
    if (document.contact_form.tot.value == "") {
        document.getElementById("validar4").style.display = "block";
    } else {
        var f=document.contact_form.tot.value
        Numeric(f);
    }
 }
}

/*
function validaSoloNumerico(cadena){
    var patron = /^\d+$/;
    if(!cadena.search(patron)){
      document.getElementById("validar4").style.display = "none";
      document.contact_form.hour.disabled = false;
      document.contact_form.hour.focus(); 
    }
    else
      document.getElementById("validar4").style.display = "block";
}*/

function Numeric(valor){
    valor = parseInt(valor);

      //Compruebo si es un valor numérico 
      if (isNaN(valor)) { 
         //entonces (no es numero) devuelvo el valor cadena vacia
         document.getElementById("validar4").style.display = "block";
      }else{ 
         //En caso contrario (Si era un número) devuelvo el valor
      document.getElementById("validar4").style.display = "none";
      document.contact_form.hour.disabled = false;
      document.contact_form.hour.focus(); 
      return valor;
         
      } 
} 

function pass() {
    document.contact_form.tel1.disabled = false;
    var forma = document.contact_form.hour.options[document.contact_form.hour.selectedIndex].value;
    document.getElementById("xd").value= forma;
    document.contact_form.tel1.focus();
}


function tel(e) { 
if (window.event) {keyval=e.keyCode}
else
if (e.which) {keyval=e.which}
if (keyval == "13") {
    if (document.contact_form.tel1.value == "") {
        document.getElementById("validar4").style.display = "block";
    } else {
        var f=document.contact_form.tel1.value
        check_cel(f);
    }
 }
}

function check_cel(cadena) { 
var patron = /^(2|6|7)\d{3}-\d{4}$/;
    if(!cadena.search(patron)){
      document.getElementById("validar4").style.display = "none";
      document.contact_form.email1.disabled = false;
      document.contact_form.email1.focus();  
    }
    else
      document.getElementById("validar4").style.display = "block";
}

function correos(e) { 
if (window.event) {keyval=e.keyCode}
else
if (e.which) {keyval=e.which}
if (keyval == "13") {
    if (document.contact_form.email1.value == "") {
        document.getElementById("validar4").style.display = "block";
    } else {
        var f=document.contact_form.email1.value
        check_cor(f);
    }
 }
}

function check_cor(cadena) { 
var patron = /^[A-Z0-9._%+-]+@(?: |gmail|outlook|hotmail|yahoo)+\.(?: |com|org|net|es|info)$/i;
    if(!cadena.search(patron)){
      document.getElementById("validar4").style.display = "none";
      document.contact_form.envi.disabled = false;
      document.contact_form.envi.focus();  
    }
    else
      document.getElementById("validar4").style.display = "block";
}