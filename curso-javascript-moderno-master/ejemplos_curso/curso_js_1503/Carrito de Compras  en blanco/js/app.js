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
a1                        <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="1">Agregar Al Carrito</a>
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