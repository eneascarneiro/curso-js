document.querySelector('#aprende').addEventListener('click', ejecutarAccion);
document.querySelector('#submit-buscador').addEventListener('click', eliminarElemento);


function ejecutarAccion(e) {
    e.preventDefault();
        const nuevaTextArea = document.createElement("textArea");
        const saltoDeLinea = document.createElement("br");
        //Añadimos el texto
        nuevaTextArea.className = "textConfirm";
        nuevaTextArea.appendChild(document.createTextNode('Estás aprendiendo algo nuevo'));
        
        //Insertar el nuevo hijo
        document.querySelector('#aprende').appendChild(saltoDeLinea);
        document.querySelector('#aprende').appendChild(nuevaTextArea);

};
function eliminarElemento(e) {
    e.preventDefault();
    alert("eliminando")
 
    const elemento = document.querySelectorAll('.textConfirm');
    elemento[0].remove();
}
