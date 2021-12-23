function ejecutar(){
    //Variable para el iterador
    var intNumeroIterador = 0
    //variable para en número
    var intNumero = 0
    //Siempre empezamos desde 0
    do {
        
        intNumero = intNumero + 1;
        //Si mi número coincide con el que he escrito muestro la el iterador en el mensaje
        
        //pasamos a la posicion sigruiente
        intNumeroIterador = intNumeroIterador + 1;
      } while (intNumero != document.getElementById("txtNumABuscar").value);
    document.getElementById("txtResultado").value = "Encontré el número en la posicion :" + intNumeroIterador ;
}