//Aqui ponemos el código javascript
var arrayJsonCatalogo =  [
    {
        imagen1: 'img/curso1.jpg',
        h4: 'HTML5, CSS3, JavaScript para Principiantes',
        nombre: 'Luis Perez',
        imagen2: 'img/estrellas.png',
        precio: 200,
        precio_descuento: 15
    },
    {
        imagen1: 'img/curso2.jpg',
        h4: 'Curso de Comida Vegetariana',
        nombre: 'Juan Perez',
        imagen2: 'img/estrellas.png',
        precio: 200,
        precio_descuento: 15
    }
]
//Aqui hay que generar 
/*
<div class="row">
            <div class="four columns">
                <div class="card">
                    <img src="img/curso1.jpg" class="imagen-curso u-full-width">
                    <div class="info-card">
                        <h4>HTML5, CSS3, JavaScript para Principiantes</h4>
                        <p>Juan Pedro</p>
                        <img src="img/estrellas.png">
                        <p class="precio">$200  <span class="u-pull-right ">$15</span></p>
                        <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="1">Agregar Al Carrito</a>
                    </div>
                </div> <!--.card-->
            </div>
</div> <!--.row-->
*/ 
//E incluirlo en lista-cursos
//Busco la caja en la que añadir usar document.getElementById
micaja = document.getElementById("lista-cursos")
arrayJsonCatalogo.forEach((curso, index) => {
    //Praparamos que no insertamos
    divN1 = document.createElement("div")
    divN1.setAttribute("class","row")
    //divN2
    divN2 = document.createElement("div")
    divN2.setAttribute("class","four columns")

})