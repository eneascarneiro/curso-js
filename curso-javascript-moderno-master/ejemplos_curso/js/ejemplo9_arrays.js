
function ejecutar(){
    const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre');
    const mezclado = ['Hola', 20, true, null, false, undefined];
    const strIni = "p,dugkpoiudvhuhdpjukj`pujl"
    switch (document.getElementById("txtOpcion").value) {
        case '1':
            
            document.getElementById("txtResultado").value = "El array de meses tiene " + contar_elem_array (meses) +" elementos"
            //Array mezclado

            document.getElementById("txtResultado1").value = "El array de meses tiene " + contar_elem_array(mezclado) +" elementos"
        break;
        case '2':
            
            document.getElementById("txtResultado").value = strIni
            document.getElementById("txtResultado1").value = "El string  de meses tiene " + contar_letras_str(strIni) +" letras"
        break;
        case '3':
            
            document.getElementById("txtResultado").value = "El  mes 3 es  " + meses[2] 
            document.getElementById("txtResultado1").value = "La primera letra del mes 3 es  " + meses[2][0]
        break;

        default:
            document.getElementById("txtResultado").value = "Opcion no valida"
      
      }
    }

function contar_elem_array(arrEntrada){
    if (Array.isArray(arrEntrada)) {
        return arrEntrada.length
    } else{
        return -1;
    }
}
function contar_letras_str(strEntrada){

    if (typeof(strEntrada) == "string") {
        return strEntrada.length
    } else{
        return -1;
    }
}