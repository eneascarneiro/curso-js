function ejecutar(){
    //Leer el número inicial
    var intNumeroInicial = parseInt(document.getElementById("txtNumInicial").value);
    var intNumerosAGenerar = parseInt(document.getElementById("txtNumerosAGenerar").value);
    // Comprobamos si es par o no el número inicial si es impar sumo 1 al número inicial
    var intNumero = intNumeroInicial + IsPar(intNumeroInicial);
    //Generamos la cadena para almacenar los números
    var strCadenaNumeros = String(intNumero);
    //Calculamos los números
    for (let i = 1; i < intNumerosAGenerar; i++) {
        intNumero = intNumero + 2;
        strCadenaNumeros = strCadenaNumeros.concat(";",intNumero);
        //strCadenaNumeros = strCadenaNumeros + ";" + intNumero;
    }
    document.getElementById("txtResultado").value = strCadenaNumeros;
}

function IsPar(value){
    if (value%2==0) {
       return 0;
    } else {
        return 1;
    }
}