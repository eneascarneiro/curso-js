//VARIABLES
const carrito = document.getElementById('carrito');
const cursos = document.getElementById('lista-cursos');
const listaCursos = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

//LISTENERS
cargarEventListeners();

function cargarEventListeners(){
    //Dispara cuando se presiono "Agregar Carrito"
    cursos.addEventListener('click', comprarCurso);

    //Cuando se elimina un curso del carrito
    carrito.addEventListener('click', eliminarCurso);

    //Al vaciar el carrito
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);

    //Al cargar documento, mostrar Local Storage
    document.addEventListener('DOMContentLoaded', leerLocalStorage);
}   

//FUNCIONES

//Función que añade el curso al carrito
function comprarCurso(e) {
    //Previene cualquier acción por defecto
    e.preventDefault();
    
    //Delegation para agregar-carrito
    
}

//Lee los datos del curso
function leerDatosCurso(curso) {
   
}

//Muestra el Curso Seleccionado en el Carrito
function insertarCarrito(curso) {
  
    //Le añadimos el curso al carrito
  
}

//Elimina el curso del carrito en el DOM y LocalStorage
function eliminarCurso(e) {
    e.preventDefault();

    

}

//Elimina los cursos del carrito en el DOM y Local Storage
function vaciarCarrito() {
    //forma lenta
   
    // listaCursos.innerHTML = '';

    //forma rapida y recomendada
   

    //Vaciar Local Storage
   
}

//Almacenar cursos en el carrito a Local Storage
function guardarCursoLocalStorage(curso) {
   

    //Toma el valor de un array con datos de Local Storage o vacio
   
    //El curso seleccionado se agrega al array
   
}

//Comprueba que haya elementos en Local Storage
function obtenerCursosLocalStorage() {
    let cursosLS;

    //comprobar si hay algo en Local Storage

}

//Imprime los cursos de Local Storage en el carrito
function leerLocalStorage() {
    let cursosLS;

    cursosLS = obtenerCursosLocalStorage();

    cursosLS.forEach((curso) =>{
        const row = document.createElement('tr');

        //Añadimos el HTML que queremos
      
    
        //Le añadimos el curso al carrito
      
    });
}

//Elimina el curso por el ID en Local Storage
function eliminarCursoLocalStorage(curso) {
    let cursosLS;

    //Obtenemos el array de cursos
 

    //Iteramos comparando el ID del curso borrado con los del Local Storage

    //Añadimos el arreglo actual a Storage
}

//Elimina todos los cursos de Local Storage
function vaciarLocalStorage() {
 
}