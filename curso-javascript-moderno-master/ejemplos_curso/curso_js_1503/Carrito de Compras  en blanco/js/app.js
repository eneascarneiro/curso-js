//Aqui ponemos el código javascript
var arrayJsonCatalogo =  [
    {
        imagen1: 'img/curso1.jpg',
        h4: 'HTML5, CSS3, JavaScript para Principiantes',
        nombre: 'Luis Perez',
        ciudad: 'Madrid',
        imagen2: 'img/estrellas.png',
        precio: 200,
        precio_descuento: 15
    },
    {
        imagen1: 'img/curso2.jpg',
        h4: 'Curso de Comida Vegetariana',
        nombre: 'Juan Perez',
        ciudad: 'Cádiz',
        imagen2: 'img/estrellas.png',
        precio: 300,
        precio_descuento: 25
    }
    ,
    {
        imagen1: 'img/curso3.jpg',
        h4: 'Curso de Comida para gatos',
        nombre: 'Angela Perez',
        ciudad: 'Valencia',
        imagen2: 'img/estrellas.png',
        precio: 400,
        precio_descuento: 200
    }
    ,
    {
        imagen1: 'img/curso3.jpg',
        h4: 'Curso de Comida para elefantes',
        nombre: 'Pepe Perez',
        ciudad: 'Gibraltar',
        imagen2: 'img/estrellas.png',
        precio: 400,
        precio_descuento: 200
    }
]
//Aqui hay que generar 
/*
divN1 <div class="row">
divN2            <div class="four columns">
divN3                <div class="card">
img1                    <img src="img/curso1.jpg" class="imagen-curso u-full-width">
divN4                    <div class="info-card">
h4                        <h4>HTML5, CSS3, JavaScript para Principiantes</h4>
p1                        <p>Juan Pedro</p>
img2                        <img src="img/estrellas.png">
p2                        <p class="precio">$200  
span1                                <span class="u-pull-right ">$15</span>
                          </p>
                          <p> Ciudad </p>
a1                        <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="1">Agregar Al Carrito</a>
                    </div>
                </div> <!--.card-->
            </div>
</div> <!--.row-->
*/ 
//E incluirlo en lista-cursos
//Busco la caja en la que añadir usar document.getElementById
micaja = document.getElementById("lista-cursos")
//Praparamos que no insertamos
divN1 = document.createElement("div")
divN1.setAttribute("class","row")
man_num_col_row =  3
num_col = 1
arrayJsonCatalogo.forEach((curso, index) => {
    //¿En que columna estoy?
    //Si estoy en el primer elemento tengo que crear la fila
    if (num_col == 1){
        //Praparamos que no insertamos
        divN1 = document.createElement("div")
        divN1.setAttribute("class","row")
    }
    //Hay un maximo de 3 elementos por fila
    //divN2
    divN2 = document.createElement("div")
    divN2.setAttribute("class","four columns")
    //divN3
    divN3 = document.createElement("div");
    divN3.setAttribute("class","card");

    //divN4
    divN4 = document.createElement("div");
    divN4.setAttribute("class","info-card");

    //img1
    img1 = document.createElement("img");
    img1.setAttribute("src", curso.imagen1);
    img1.setAttribute("class", "imagen-curso u-full-width");

    //H4
    titulo4 = document.createElement("H4");
    texto_t4 = document.createTextNode(curso.h4);
    titulo4.appendChild(texto_t4);  // El texto es un nodo, se crea el elemento padre

    //p1
    p1 = document.createElement("p");
    texto_p1 = document.createTextNode(curso.nombre)
    p1.appendChild(texto_p1);  // El texto es un nodo, se crea el elemento padre

    //img2
    img2 = document.createElement("img");
    img2.setAttribute("src", curso.imagen2);

    //p2
    p2 = document.createElement("p");
    p2.setAttribute("class","precio");
    texto_p2 = document.createTextNode("$" + curso.precio);
    p2.appendChild(texto_p2);  // El texto es un nodo, se crea el elemento padre

    //span1
    span1 = document.createElement("span");
    span1.setAttribute("class","u-pull-right");
    texto_span1 = document.createTextNode("$" + curso.precio_descuento);
    span1.appendChild(texto_span1);   // El texto es un nodo, se crea el elemento padre

    //a1
    a1 = document.createElement("a");
    a1.setAttribute("href","#");
    a1.setAttribute("class","u-full-width button-primary button input agregar-carrito");
    a1.setAttribute("data-id",index);
    texto_a1 = document.createTextNode("Agregar Al Carrito");
    a1.appendChild(texto_a1)

    // Añado los elementos al HTML
    // Empiezamos desde el último elemento
    // Añado span1 a p2
    p2.appendChild(span1);
    // Añado div4
    divN4.appendChild(titulo4);
    divN4.appendChild(p1);
    divN4.appendChild(img2);
    divN4.appendChild(p2);
    divN4.appendChild(a1);
    // Añado div3
    divN3.appendChild(img1);
    divN3.appendChild(divN4);
    // Añado div2
    divN2.appendChild(divN3);
    // Añado div1
    divN1.appendChild(divN2);
    if (num_col == man_num_col_row){
        //Si estoy en la última columna escribo en la caja y vuelvo a la 
        //primera columna
        micaja.appendChild(divN1);
        num_col = 1
    } else{
        num_col ++
    }
})
    // Añado micaja
    micaja.appendChild(divN1);
//Aqui comienza la gestión de eventos
//Defino las variables(mandos a distancia ) para manejar los elementos de la página

//LISTENERS
PonerEnMarchaEventListeners();

//Aqui ponemos las funciones
function PonerEnMarchaEventListeners(){
    //Por cada vez que hagamos click en lista-cursos quiero ejecutar una función
    micaja.addEventListener("click",comprarcurso)
}

//Funcion para comprar un curso
function comprarcurso(ev){
    alert("Has intentado comprar un curso" )
    //Previene cualquier acción por defecto
    ev.preventDefault();
    //Delegation para agregar-carrito 
    //target es el "objetivo" el elmento en el que hice click
    if(ev.target.classList.contains('agregar-carrito')) {
        alert("El click es válido" )
        console.log(ev.target)
        console.log("Este es mi padre:" + ev.target.parentElement)
    }
}
function nombreAnimal(animal){
    alert(animal)
    console.log(ev.target)
}