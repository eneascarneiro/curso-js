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

function ejecutar1(){
    //Variable para el iterador
    var intNumeroIterador = 0
    //variable para en número
    var intNumero = 0
    //lo he encontrado
    var blEncontrado = false

    alert("blEncontrado:" + blEncontrado)
    alert("!blEncontrado:" + !blEncontrado)


    alert(" 1 > 2:" +  (1> 2))
    alert("! (1 > 2):" +  !(1> 2))
    
    //Siempre empezamos desde 0
    do {
        
        intNumero = intNumero + 1;
        //Si mi número coincide con el que he escrito muestro la el iterador en el mensaje
        if (intNumero == document.getElementById("txtNumABuscar").value){
            blEncontrado = true
        }
        //pasamos a la posicion sigruiente
        intNumeroIterador = intNumeroIterador + 1;
      } while (!blEncontrado);
    document.getElementById("txtResultado").value = "Encontré el número en la posicion :" + intNumeroIterador ;
}

function ejecutar2(){
    //Variable para el iterador
    var strAbc = "abcdefjklmnñopqrstuvxyz"
    //variable para recorrer el abc
    var intNumeroIterador = -1

    
    //Siempre empezamos desde 0
    do {
        intNumeroIterador = intNumeroIterador + 1;
      } while (strAbc[intNumeroIterador] != document.getElementById("txtStrABuscar").value &&  intNumeroIterador < strAbc.length );
    document.getElementById("txtResultado").value = "Encontré el número en la posicion :" + (intNumeroIterador + 1);
}