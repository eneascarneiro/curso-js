//Query Selector puede seleccionar ids, clases, etc
const encabezado = document.querySelector('#encabezado');
//const encabezado = document.getElementById('encabezado');

console.log(encabezado);

encabezado.style.background = '#333';
encabezado.style.color = '#fff';
encabezado.style.padding = '20px';
encabezado.textContent = 'Los mejores cursos';

function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
    encabezado.style.color = '#222';
 }
 wait(5000);


const enlace = document.querySelector('.enlace');

//Sólo te devuelve el primero
console.log(enlace);

//Solo te devuelve la primera imagen
const images = document.querySelector('img');

console.log(images);

//Hacer que te devuelva un elemento en especifico
const image = document.querySelector('.card img');

console.log(image);

const mydiv = document.querySelector('.card div');

console.log(mydiv);

const precio = document.querySelector('.precio');

console.log(precio);

//Para devolver el primer elemento
let enlaces;

//Obtener el primer enlace
enlaces = document.querySelector('#principal a:first-child');

console.log("Obtener el primer enlace" + enlaces);
//Obtener el tercer enlace
enlaces = document.querySelector('#principal a:nth-child(3)');
console.log("Obtener el tercer  enlace" + enlaces);
//Obtener el último enlace
enlaces = document.querySelector('#principal a:last-child');

console.log(enlaces);