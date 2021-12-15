function ejecutar(){
    var idAccion = document.getElementById("txtAccion").value;
    if (idAccion == "1") {
        document.getElementById("txtResultado").value = accion1()
    } else if (idAccion == "2") {
        document.getElementById("txtResultado").value = accion2()
    }  else if (idAccion == "3") {
        document.getElementById("txtResultado").value = accion3()
    }
}

//4
function accion1(){
    var nombre = document.getElementById("txtNombre").value;
    return nombre.length;
}
function accion2(){
    var cp = parseInt(document.getElementById("txtCP").value);
    //Al ser un number no nos puede devolver el length
    return cp.length
}
function accion3(){
    var cp = document.getElementById("txtCP").value;
    //Al ser un number no nos puede devolver el length
    return String(cp).length
}


