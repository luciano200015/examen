(function () {

    var navButton = document.querySelector("#nav-menu-button");
    var navUl = document.querySelector(".nav-ul");
  
    function toggleMobileMenu() {
      navUl.classList.toggle("hide-ul");
    }
  
    navButton.onclick = toggleMobileMenu;
  }());

function mostrarArticle1(){
    document.getElementById('home').style.display="";
    document.getElementById('nosotros').style.display="none";
    document.getElementById('servicios').style.display="none";
    document.getElementById('contacto').style.display="none";
    }
    function mostrarArticle2(){
    document.getElementById('home').style.display="none";
    document.getElementById('nosotros').style.display="";
    document.getElementById('servicios').style.display="none";
    document.getElementById('contacto').style.display="none";
    }
    function mostrarArticle3(){
    document.getElementById('home').style.display="none";
    document.getElementById('nosotros').style.display="none";
    document.getElementById('servicios').style.display="";
    document.getElementById('contacto').style.display="none";
    }
    function mostrarArticle4(){
    document.getElementById('home').style.display="none";
    document.getElementById('nosotros').style.display="none";
    document.getElementById('servicios').style.display="none";
    document.getElementById('contacto').style.display="";
}


//funcion para capturar evento form
var nombreuSR = document.getElementById("nombre");
//Mustra un mensaje de texto que ayuda al usuario a introducir un nomre


 // envia un registro a la consola si se ha marcado el checkbox
document.getElementById("confirmacion").addEventListener("change", function(evento) {
    console.log("Enviar email de confirmacion: " + evento.target.checked);
  });
  //muestra en consola el tipo de suscripcion elegida
  document.getElementsByName("suscripcion").forEach(function(radio) {
    radio.addEventListener("change", function (evento) {
    console.log("Suscripción elegida: " + evento.target.value);
    });
  });
// Muestra la selección de la lista desplegable
document.getElementById("conciertos").addEventListener("change", function(e) {
  console.log("conciertos:" +e.target.value);
});
var formulario = document.querySelector ("form");
console.log("Número de campos: " +formulario.elements.length);
console.log(formulario.elements[0].name); // Muestra "nombre"
console.log(formulario.elements.clave.type); // Muestra "password"
console.log(formulario.elements[2].name);
console.log(formulario.elements.newsPromo.type); //Muestra radio
document.querySelector("form").addEventListener("submit", function(evento) {
    evento.preventDefault();
   // También se puede acceder a los elementos a través de form.elements. Ejemplo
    console.log("Nombre de usuario: " + evento.target.elements.nombre.value);
    console.log("Contraseña: " + evento.target.clave.value);
    console.log("Email: " + evento.target.email.value);
    console.log("Confirmación: " + evento.target.confirmacion.checked);
    console.log("Suscripción: " + evento.target. suscripcion.value);
    console.log("Concierto Seleccionado:" + evento.target.conciertos.value);
}); 

let btn_show=document.querySelector('.hidetext_btn');
let id_span=document.querySelector('.hidetext');
btn_show.addEventListener('click',toogletext);

function toogletext() {
  if (id_span.style.display=='none') {
    id_span.style.display='block'
    btn_show.textContent='ocultar'
  }
  else if(id_span.style.display=='block'){
    id_span.style.display='none'
    btn_show.textContent='Leer mas>>'
  }
  
}
let btn_show1=document.querySelector('.hidetext_btn1');
let id_span1=document.querySelector('.hidetext1');
btn_show1.addEventListener('click',toogletext1);
function toogletext1() {
  if (id_span1.style.display=='none') {
    id_span1.style.display='block'
    btn_show1.textContent='ocultar'
  }
  else if(id_span1.style.display=='block'){
    id_span1.style.display='none'
    btn_show1.textContent='Leer mas>>'
  }
  
}
let btn_show2=document.querySelector('.hidetext_btn2');
let id_span2=document.querySelector('.hidetext2');
btn_show2.addEventListener('click',toogletext2);
function toogletext2() {
  if (id_span2.style.display=='none') {
    id_span2.style.display='block'
    btn_show2.textContent='ocultar'
  }
  else if(id_span2.style.display=='block'){
    id_span2.style.display='none'
    btn_show2.textContent='Leer mas>>'
  }
  
}
let btn1=document.getElementById('btn-show1');
let span1=document.getElementById('span1');
btn1.addEventListener('click',toogletext4);
function toogletext4() {
  if (span1.style.display=='none') {
    span1.style.display='block'
    btn1.textContent='ocultar'
  }
  else if(span1.style.display=='block'){
    span1.style.display='none'
    btn1.textContent='Leer mas>>'
  }
  
}
let btn3=document.getElementById('btn-show3');
let span3=document.getElementById('span3');
btn3.addEventListener('click',toogletext6);
function toogletext6() {
  if (span3.style.display=='none') {
    span3.style.display='block'
    btn3.textContent='ocultar'
  }
  else if(span3.style.display=='block'){
    span3.style.display='none'
    btn3.textContent='Leer mas>>'
  }
  
}
let btn2=document.getElementById('btn-show2');
let span2=document.getElementById('span2');
btn2.addEventListener('click',toogletext5);
function toogletext5() {
  if (span2.style.display=='none') {
    span2.style.display='block'
    btn2.textContent='ocultar'
  }
  else if(span2.style.display=='block'){
    span2.style.display='none'
    btn2.textContent='Leer mas>>'
  }
  
}