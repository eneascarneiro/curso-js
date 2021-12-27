//Crear un array de objetos
const catalogo = [
    {
        imagen1: "img/curso1.jpg",
        titulo: "HTML5, CSS3, JavaScript para Principiantes",
        nombre: "Juan Pedro",
        imagen_estrellas: "img/estrellas.png",
        precio: "$200",
        dataid: "1"
        },
        {
        imagen1: "img/curso2.jpg",
        titulo: "Curso de Comida Vegetariana",
        nombre: "Juan Pedro",
        imagen_estrellas: "img/estrellas.png",
        precio: "$200",
        dataid: "2"
        },
        {
        imagen1: "img/curso3.jpg",
        titulo: "Guitarra para Principiantes",
        nombre: "Juan Pedro",
        imagen_estrellas: "img/estrellas.png",
        precio: "$200",
        dataid: "3"
        },
        {
        imagen1: "img/curso4.jpg",
        titulo: "Huerto en tu casa",
        nombre: "Juan Pedro",
        imagen_estrellas: "img/estrellas.png",
        precio: "$200",
        dataid: "4"
        },
        {
        imagen1: "img/curso5.jpg",
        titulo: "Decoración con productos de tu hogar",
        nombre: "Juan Pedro",
        imagen_estrellas: "img/estrellas.png",
        precio: "$200",
        dataid: "5"
        },
        {
        imagen1: "img/curso1.jpg",
        titulo: "Diseño Web para Principiantes",
        nombre: "Juan Pedro",
        imagen_estrellas: "img/estrellas.png",
        precio: "$200",
        dataid: "6"
        },
        {
        imagen1: "img/curso2.jpg",
        titulo: "Comida Mexicana para principiantes",
        nombre: "Juan Pedro",
        imagen_estrellas: "img/estrellas.png",
        precio: "$200",
        dataid: "7"
        },
        {
        imagen1: "img/curso3.jpg",
        titulo: "Estudio Musical en tu casa",
        nombre: "Juan Pedro",
        imagen_estrellas: "img/estrellas.png",
        precio: "$200",
        dataid: "8"
        },
        {
        imagen1: "img/curso4.jpg",
        titulo: "Cosecha tus propias frutas y verduras",
        nombre: "Juan Pedro",
        imagen_estrellas: "img/estrellas.png",
        precio: "$200",
        dataid: "9"
        },
        {
        imagen1: "img/curso5.jpg",
        titulo: "Prepara galletas caseras",
        nombre: "Juan Pedro",
        imagen_estrellas: "img/estrellas.png",
        precio: "$200",
        dataid: "10"
        },
        {
        imagen1: "img/curso1.jpg",
        titulo: "JavaScript Moderno con ES6",
        nombre: "Juan Pedro",
        imagen_estrellas: "img/estrellas.png",
        precio: "$200",
        dataid: "11"
        },
        {
        imagen1: "img/curso2.jpg",
        titulo: "100 Recetas de Comida Natural",
        nombre: "Juan Pedro",
        imagen_estrellas: "img/estrellas.png",
        precio: "$200",
        dataid: "12"
        }
        
];
console.log("creando contenido")
var intNumElemRow = 1;
 //Empezamos buscando al padre
 const elementoPadre = document.querySelector('#lista-cursos');
 //Añadimos el h1
 const elemH1 = document.createElement('h1');
 //Agregamos una clase
 elemH1.className = 'encabezado';
 elemH1.id =  'encabezado';
 //Añadimos el texto
 elemH1.appendChild(document.createTextNode('Cursos En Línea'));
 //Lo insertamos
 elementoPadre.appendChild(elemH1);
 var newRow = ""
catalogo.forEach((elementoCatalogo, index) => {
    //Rellenamos las filas
    if (intNumElemRow == 1){
        console.log("creando  la fila")
        //estoy empezando fila, creo una nueva
         newRow =  document.createElement('div');
        newRow.className = "row";
        var newElemFourColums =  document.createElement('div');
        newElemFourColums.className = "four columns";
        //Card
        var newElemCard =  document.createElement('div');
        newElemCard.className = "card";
        //Imagen 1
        var newElemImagen1 =  document.createElement('img');
        newElemImagen1.className = "imagen-curso u-full-width";
        newElemImagen1.src = elementoCatalogo.imagen1;
        //Info-card
        var newElemInfoCard =  document.createElement('div');
        newElemInfoCard.className = "info-card";
        //H4
        const elemH4 = document.createElement('h4');
        //Añadimos el texto
        elemH4.appendChild(document.createTextNode(elementoCatalogo.titulo));
        //Nombre
        var newElemNombre =  document.createElement('p');
        //Añadimos el texto
        newElemNombre.appendChild(document.createTextNode(elementoCatalogo.nombre));
        //Imagen estrellas
        var newElemImagenEstrellas =  document.createElement('img');
        newElemImagenEstrellas.src = elementoCatalogo.imagen_estrellas;
        //Añadimos el span
        var newSpan =  document.createElement('span');
        newSpan.className = "u-pull-right";
        newSpan.appendChild(document.createTextNode("$15"));
        //Precio
        var newElemPrecio =  document.createElement('p');
        newElemPrecio.className = "precio";
        //Añadimos el texto
        newElemPrecio.appendChild(document.createTextNode(elementoCatalogo.precio));
        newElemPrecio.appendChild(newSpan);
        //Referencia
        var newElemRef =  document.createElement('a');
        newElemRef.className = "u-full-width button-primary button input agregar-carrito";
        newElemRef.dataid = elementoCatalogo.dataid;
        newElemRef.href = "#";
        newElemRef.appendChild(document.createTextNode("Agregar Al Carrito"));
        //Componemos info card
        newElemInfoCard.appendChild(elemH4);
        newElemInfoCard.appendChild(newElemNombre);
        newElemInfoCard.appendChild(newElemImagenEstrellas);
        newElemInfoCard.appendChild(newElemPrecio);
        newElemInfoCard.appendChild(newElemRef);
        //Componemos card
        newElemCard.appendChild(newElemImagen1);
        newElemCard.appendChild(newElemInfoCard);
        //Componemos four col
        newElemFourColums.appendChild(newElemCard);
        //Añadimos al row
        newRow.appendChild(newElemFourColums);
        intNumElemRow = intNumElemRow +1;
    }else{
        console.log("añadiendo elemento a la fila")
        //añado elemento a fila existente
        var newElemFourColums =  document.createElement('div');
        newElemFourColums.className = "four columns";
        var newElemCard =  document.createElement('div');
        newElemCard.className = "card";
        //Imagen 1
        var newElemImagen1 =  document.createElement('img');
        newElemImagen1.className = "imagen-curso u-full-width";
        newElemImagen1.src = elementoCatalogo.imagen1;
        //Info-card
        var newElemInfoCard =  document.createElement('div');
        newElemInfoCard.className = "info-card";
        //H4
        const elemH4 = document.createElement('h4');
        //Añadimos el texto
        elemH4.appendChild(document.createTextNode(elementoCatalogo.titulo));
        //Nombre
        var newElemNombre =  document.createElement('p');
        //Añadimos el texto
        newElemNombre.appendChild(document.createTextNode(elementoCatalogo.nombre));
        //Imagen estrellas
        var newElemImagenEstrellas =  document.createElement('img');
        newElemImagenEstrellas.src = elementoCatalogo.imagen_estrellas;
        //Añadimos el span
        var newSpan =  document.createElement('span');
        newSpan.className = "u-pull-right";
        newSpan.appendChild(document.createTextNode("$15"));
        //Precio
        var newElemPrecio =  document.createElement('p');
        newElemPrecio.className = "precio";
        //Añadimos el texto
        newElemPrecio.appendChild(document.createTextNode(elementoCatalogo.precio));
        newElemPrecio.appendChild(newSpan);
        //Referencia
        var newElemRef =  document.createElement('a');
        newElemRef.className = "u-full-width button-primary button input agregar-carrito";
        newElemRef.dataid = elementoCatalogo.dataid;
        newElemRef.href = "#";
        newElemRef.appendChild(document.createTextNode("Agregar Al Carrito"));
        //Componemos info card
        newElemInfoCard.appendChild(elemH4);
        newElemInfoCard.appendChild(newElemNombre);
        newElemInfoCard.appendChild(newElemImagenEstrellas);
        newElemInfoCard.appendChild(newElemPrecio);
        newElemInfoCard.appendChild(newElemRef);
        //Componemos card
        newElemCard.appendChild(newElemImagen1);
        newElemCard.appendChild(newElemInfoCard);
        //Componemos four col
        newElemFourColums.appendChild(newElemCard);
        //Añadimos al row
        newRow.appendChild(newElemFourColums);
        //Si estoy escribiendo el tercer elemento empiezo fila
        if (intNumElemRow == 3){
            intNumElemRow = 1;
            elementoPadre.appendChild(newRow);
        }
        else{
            intNumElemRow = intNumElemRow +1;
        }
        
    }

});