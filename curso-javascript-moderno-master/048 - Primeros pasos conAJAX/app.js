document.getElementById('cargar').addEventListener('click', cargarDatos);

function cargarDatos() {
    var respuesta = "Sin valor";
    // Crear el objeto xmlhttprequest
    const xhr = new XMLHttpRequest();

    // Abrir una conexión
    xhr.open('GET', 'datos.txt', true);

    //FORMA NUEVA
    // Una vez que carga
    // xhr.onload = function() {
    //     //200: Correcto
    //     //403: Prohibido 
    //     //404: No encontrado
    //     if(this.status === 200) {
    //         document.getElementById('listado').innerHTML = `<h1>${this.responseText}</h1>`;
    //     }
    // }

    xhr.onreadystatechange = function() {
        //Ready status
        /* 
        0 - No inicializado
        1 - Conexión establecida
        2 - Recibido
        3 - Procesado
        4 - Respuesta lista
        */
        console.log(`Estado ${this.readyState}`);

       if(this.readyState === 4 && this.status === 200) {
           console.log(this.responseText);
           //Para sacar el contenido se recomienda llamar a una función
           volcarDatos(this.responseText);
       }

    }
    console.log("antes del send")
    // Enviar el request
    xhr.send();
    console.log("la respuesta es:" + respuesta)
}
function volcarDatos(strRes){
    respuesta = strRes;
    console.log("la respuesta  en la funcion es:" + respuesta)
}