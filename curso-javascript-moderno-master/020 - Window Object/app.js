// Guardar valor que te pide por pantalla
// const nombre = prompt();
// console.log(`Bienvenido ${nombre}`);

// Te sale un popup con aceptar o cancelar
// if(confirm('Eliminar?')) {
//     console.log('Eliminado');
// }else{
//     console.log('Nada paso!');
// }

let altura, anchura;

//Toda la ventana
altura = window.outerHeight;
anchura = window.outerWidth;


console.log("Altura" + altura);
console.log("Anchura" + anchura);

//Sólo lo que se muestra
alturaOnly = window.innerHeight;
anchuraOnly = window.innerWidth;

console.log("alturaOnly" +  alturaOnly);
console.log("anchuraOnly" + anchuraOnly);

let ubicacion;

ubicacion = window.location;

console.log(ubicacion);
console.log(ubicacion.hostname);
console.log(ubicacion.search);

//Redireccionar mediante javascript
//window.location.href = 'http://twitter.com';

//Ver navegador
let navegador;

navegador = window.navigator;

console.log(navegador);
console.log(navegador.appName);
console.log(navegador.appVersion);
console.log(navegador.userAgent);
console.log(navegador.language);
