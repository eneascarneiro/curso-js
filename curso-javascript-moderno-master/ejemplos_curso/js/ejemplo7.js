
//Variable para el iterador
var intNumeroIterador = 0;
//variable para en número
var intNumeroAAdivinar = 27;
console.log("Ejecución inicial")
function ejecutar2(){
//Siempre empezamos desde 0

    intNumeroIterador = intNumeroIterador + 1;
    //Si mi número coincide con el que he escrito muestro la el iterador en el mensaje
    intNumeroIntroducido = document.getElementById("txtNumero").value;
    if (parseInt(intNumeroIntroducido) == intNumeroAAdivinar){
        document.getElementById("txtResultado").value = "Lo has encontrado en "+ intNumeroIterador + " intentos" ;
        intNumeroIterador = 0;
    }
    else if  (parseInt(intNumeroIntroducido) > intNumeroAAdivinar){
        document.getElementById("txtResultado").value = "El número es >. Sigue intentándolo, núm intento " +  intNumeroIterador;
    }
    else{
        document.getElementById("txtResultado").value = "El número es <. Sigue intentándolo, núm intento " +  intNumeroIterador;
    }
}