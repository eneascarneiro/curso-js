
//VARIABLES
const carrito = document.getElementById('carrito');
//document.getElementsByClassName
//querySelector
// #  -> por id
// .   -> clase
// nada -> elem(etiqueta)
//const compra
const compra = document.getElementById('compra');
const cursos = document.getElementById('lista-cursos');
const listaCursos = document.querySelector('#lista-carrito tbody');
//lista compra
const listaCompras = document.querySelector('#lista-compra tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
//Boton comprar
const hacerCompraBtn = document.getElementById('comprar-carrito');

//delegacion
document.body.addEventListener('onmouseover', ayuda);
function ayuda(e) {
    e.preventDefault();
    // console.log(`Click!`);
    // console.log(e.target.classList);

    if(e.target.classList.contains('borrar-curso')) {
        alert("esta es la ayuda de borrar curso");
    }

    if(e.target.classList.contains('agregar-carrito')) {
        alert("esta es la ayuda de borrar curso");
    }
};
//LISTENERS
cargarEventListeners();

function cargarEventListeners(){
    //Dispara cuando se presiono "Agregar Carrito"
    cursos.addEventListener('click', comprarCurso);

    //Cuando se elimina un curso del carrito
    carrito.addEventListener('click', eliminarCurso);

    //Al vaciar el carrito
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);

    //Crear evento comprar asociaco a boton comprar
    hacerCompraBtn.addEventListener('click',comprarTodo)

    //Al cargar documento, mostrar Local Storage
    document.addEventListener('DOMContentLoaded', leerLocalStorage);
}   

//FUNCIONES

//Función que añade el curso al carrito
function comprarCurso(ev) {
    //Previene cualquier acción por defecto
    ev.preventDefault();
    console.log("comprando curso")
    //Delegation para agregar-carrito
    if(ev.target.classList.contains('agregar-carrito')) {
        //Ir a la clase card
        const curso = ev.target.parentElement.parentElement;

        //Enviamos el curso seleccionado para tomar sus datos
        leerDatosCurso(curso);
    }
}

//Lee los datos del curso
function leerDatosCurso(curso) {
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id')
    }
    
    insertarCarrito(infoCurso);
}

//Muestra el Curso Seleccionado en el Carrito
function insertarCarrito(curso) {
    const row = document.createElement('tr');

    //Añadimos el HTML que queremos
    row.innerHTML = `
        <td>
            <img src="${curso.imagen}" width="100">
        </td>
        <td>
            ${curso.titulo}
        </td>
        <td>
            ${curso.precio}
        </td>
        <td>
            <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
        </td>
    `;

    //Le añadimos el curso al carrito
    listaCursos.appendChild(row);

    guardarCursoLocalStorage(curso);
}

//Elimina el curso del carrito en el DOM y LocalStorage
function eliminarCurso(e) {
    e.preventDefault();

    let curso, cursoId;
    
    if(e.target.classList.contains('borrar-curso')) {

        curso = e.target.parentElement.parentElement;
        cursoId = curso.querySelector('a').getAttribute('data-id');
        e.target.parentElement.parentElement.remove();
        eliminarCursoLocalStorage(cursoId);
    }

    

}

//Elimina los cursos del carrito en el DOM y Local Storage
function vaciarCarrito() {
    //forma lenta
    // listaCursos.innerHTML = '';

    //forma rapida y recomendada
    while(listaCursos.firstChild) {
        listaCursos.removeChild(listaCursos.firstChild);
    }

    //Vaciar Local Storage
    vaciarLocalStorage();

    return false;
}
//Comprar los cursos del carritoy quitarlos del Local Storage
function comprarTodo(e) {
    //Previene cualquier acción por defecto
    e.preventDefault();
    console.log("comprando todo")
    //Leemos el storage
    cursosAComprar = obtenerCursosLocalStorage();
    //Y escribimos en compras
    cursosAComprar.forEach((curso) =>{
        const row = document.createElement('tr');

        //Añadimos el HTML que queremos
        row.innerHTML = `
            <td>
                <img src="${curso.imagen}" width="100">
            </td>
            <td>
                ${curso.titulo}
            </td>
            <td>
                ${curso.precio}
            </td>
        `;
    
        //Le añadimos el curso al carrito
        listaCompras.appendChild(row);
    });
    //o leyendo del carrito
    /*
    while(listaCursos.firstChild) {
        const infoCurso = {
            imagen: listaCursos.firstChild.querySelector('img').src,
            titulo: listaCursos.firstChild.querySelector('h4').textContent,
            precio: listaCursos.firstChild.querySelector('.precio span').textContent,
        }
        listaCursos.removeChild(listaCursos.firstChild);
        //Creo el html y lo añado
        const row = document.createElement('tr');

        //Añadimos el HTML que queremos
        row.innerHTML = `
            <td>
                <img src="${infoCurso.imagen}" width="100">
            </td>
            <td>
                ${infoCurso.titulo}
            </td>
            <td>
                ${infoCurso.precio}
            </td>
        `;
    
        //Le añadimos el curso al carrito
        listaCompras.appendChild(row);
    }
    */
    //Vaciamos el carrito
    while(listaCursos.firstChild) {
        listaCursos.removeChild(listaCursos.firstChild);
    }
    //Vaciar Local Storage
    vaciarLocalStorage();
    
    return false;
}

//Almacenar cursos en el carrito a Local Storage
function guardarCursoLocalStorage(curso) {
    let cursos;

    //Toma el valor de un array con datos de Local Storage o vacio
    cursos = obtenerCursosLocalStorage();

    //El curso seleccionado se agrega al array
    cursos.push(curso);

    localStorage.setItem('cursos', JSON.stringify(cursos));
}

//Comprueba que haya elementos en Local Storage
function obtenerCursosLocalStorage() {
    let cursosLS;

    //comprobar si hay algo en Local Storage
    if(localStorage.getItem('cursos') === null) {
        cursosLS = [];
    }else{
        cursosLS = JSON.parse(localStorage.getItem('cursos'));
    }

    return cursosLS;
}

//Imprime los cursos de Local Storage en el carrito
function leerLocalStorage() {
    let cursosLS;

    cursosLS = obtenerCursosLocalStorage();

    cursosLS.forEach((curso) =>{
        const row = document.createElement('tr');

        //Añadimos el HTML que queremos
        row.innerHTML = `
            <td>
                <img src="${curso.imagen}" width="100">
            </td>
            <td>
                ${curso.titulo}
            </td>
            <td>
                ${curso.precio}
            </td>
            <td>
                <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
            </td>
        `;
    
        //Le añadimos el curso al carrito
        listaCursos.appendChild(row);
    });
}

//Elimina el curso por el ID en Local Storage
function eliminarCursoLocalStorage(curso) {
    let cursosLS;

    //Obtenemos el array de cursos
    cursosLS = obtenerCursosLocalStorage();

    //Iteramos comparando el ID del curso borrado con los del Local Storage
    cursosLS.forEach((cursoLS, index) => {
        if(cursoLS.id === curso) {
            cursosLS.splice(index, 1);
        }
    });

    //Añadimos el arreglo actual a Storage
    localStorage.setItem('cursos', JSON.stringify(cursosLS));
}

//Elimina todos los cursos de Local Storage
function vaciarLocalStorage() {
    localStorage.clear();
}

