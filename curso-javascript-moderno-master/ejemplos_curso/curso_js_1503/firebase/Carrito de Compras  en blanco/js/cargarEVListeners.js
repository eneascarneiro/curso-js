//Aqui ponemos las funciones
function PonerEnMarchaEventListeners(){
    var micaja = document.getElementById("lista-cursos")
    //Por cada vez que hagamos click en lista-cursos quiero ejecutar una función
    micaja.addEventListener("click",comprarcurso)
    //Añadir un evento para vaciar el carrito
    document.getElementById("vaciar-carrito").addEventListener("click",vaciarcarro)
}

//Funcion vaciar carro
 function vaciarcarro(ev){
    //Previene cualquier acción por defecto
    ev.preventDefault();
    //Delegation para agregar-carrito 
    //target es el "objetivo" el elmento en el que hice click
    //Voy a mi padre id = "carrito" y desde éste recorro todas las filas de tbody y las elmino
    //Voy a mi padre id = "carrito"
    const misSandias = ev.target.parentElement.querySelector("tbody")
    do{
        misSandias.removeChild(misSandias.firstChild)
    } while(misSandias.firstChild)
}

//Funcion para comprar un curso
 function comprarcurso(ev){
    //Previene cualquier acción por defecto
    ev.preventDefault();
    alert("estoy comprando un curso")
    //Delegation para agregar-carrito 
    //target es el "objetivo" el elmento en el que hice click
    if(ev.target.classList.contains('agregar-carrito')) {
        console.log(ev.target)
        //Tengo que saltar desde la etiqueta <a> hasta divN3
        //Subimos en la jerarquía de html
        //Para posteriormente volver a bajar leyendo
        let puntoDePartidaDeLectura = ev.target.parentElement.parentElement
        console.log(ev.target.parentElement.parentElement)
        //Leer la primera imagen
        let primeraImagen = puntoDePartidaDeLectura.querySelector("img")
        console.log("El src de la imagen es:" + primeraImagen.getAttribute("src"))
        //Leer el nombre del curso
        let nombreCurso = puntoDePartidaDeLectura.querySelector("h4")
        console.log("El nombreCurso  es:" + nombreCurso.textContent)
        //Leer el precio
        let precio = puntoDePartidaDeLectura.querySelector("span")
        console.log("El precio es:" + precio.textContent)
        //queda pendiente leer el data_id y añairlo a la referncia en el carrito
        
        //Generar la parte a insertar en tbody del id lista-carrito
        //Hay que generar una estructura
        //<tr>
        let nuevaFilaCarrito = document.createElement("tr")
        // 3 elementos <td>.....</td>
        let imagenTd = document.createElement("td")
        //Generamos el objeto
        let img1 = document.createElement("img");
        img1.setAttribute("src", primeraImagen.getAttribute("src"));
        img1.setAttribute("class", "imagen-curso u-full-width");
        //añadimos la imagen al td
        imagenTd.appendChild(img1)

        //Creamos el elemento para el nombre
        let  nombreTd = document.createElement("td")
        let textoNodoNombre= document.createTextNode(nombreCurso.textContent)
        nombreTd.appendChild(textoNodoNombre)
        //Creamos el elemento para el precio
        let  precioTd = document.createElement("td")
        precioTd.appendChild(document.createTextNode(precio.textContent))
        
        //me faltaba generar el bonton de eliminar fila
        a1 = document.createElement("a");
        a1.setAttribute("href","#");
        a1.setAttribute("class","u-full-width button-primary button input agregar-carrito");
        //a1.setAttribute("data-id",index);
        texto_a1 = document.createTextNode("(x)");
        a1.appendChild(texto_a1)
        //Al boton hay que añadir en tiempo de generacion un evento
        a1.addEventListener("click",eliminarfiladelcarrito)
        //</tr>
        nuevaFilaCarrito.appendChild(imagenTd)
        nuevaFilaCarrito.appendChild(nombreTd)
        nuevaFilaCarrito.appendChild(precioTd)
        nuevaFilaCarrito.appendChild(a1)
        //nuevaFilaCarrito.appendChild(document.createElement("td").appendChild(document.createTextNode(nombreCurso.textContent)))
        //nuevaFilaCarrito.appendChild(document.createElement("td").appendChild(document.createTextNode(precio.textContent)))

        //Notacion abreviada


        //Añado al carrito
        //¿donde esta mi carrito?
        miCarrito = document.getElementById("lista-carrito")
        mitbody = miCarrito.querySelector("tbody")
        //Añado la fila al carrito
        mitbody.appendChild(nuevaFilaCarrito)



        
    }
}
 function eliminarfiladelcarrito(ev){
     //Previene cualquier acción por defecto
     ev.preventDefault();
     //identifico a mi padre y lo guardo
     miPadreEs = ev.target.parentElement
     //identifico a mi abuelo y lo guardo
     miAbueloEs = ev.target.parentElement.parentElement
     //Desde mi abuelo mato a mi padre
     miAbueloEs.removeChild(miPadreEs)

}
