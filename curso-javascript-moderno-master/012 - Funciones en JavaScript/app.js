//FUNCTION DECLARATION
function saludar() {
    console.log('Hola Miguel');
}

saludar();

//function 1
function saludaNombre(nombre) {
    console.log(`Hola ${nombre}`);
}

saludaNombre('José');
saludaNombre('Pablo');
saludaNombre('Juan');

//function 2
function sumar(num1, num2) {
    console.log(num1 + num2);
}

sumar(1,2);
sumar(2913321,21312312);
sumar(document.getElementById("txtNum1").value,document.getElementById("txtNum2").value);


//function 3
function sumarOtro(num1 = 0, num2 = 0) {
    //Comprobar si num1 es numérico

    //Comprobar si num2 es numérico

    //Si to es correcto devolver la suma
    return num1 + num2;
    
}
sumaTexo = sumarOtro("Hola ", 3);
sumaTexo = sumarOtro();
suma = sumarOtro(2,3) + sumarOtro(23,15);

console.log(suma);

//function 4

//Forma Vieja
function saludaOtro(nombre) {
    if(typeof nombre === 'undefined'){
        nombre = 'Visitante Viejo'
    }
    return `hola ${nombre}`;
}

//Forma Nueva
function saludaOtroNuevo(nombre = 'Visitante Nuevo') {
    return `Hola ${nombre}`;
}

//Recibiremos undefined si no le pasamos un valor. Ahora se lo definimos como Visitante
console.log(saludaOtro());

//Forma nueva dandole un valor default a la variable nombre
console.log(saludaOtroNuevo());


//FUNCTION EXPRESSION
const sumaExpression = function(num1 = 0, num2 = 0) {
    return num1 + num2;
}

console.log(sumaExpression(1,2));
console.log(sumaExpression());

const saludarExpression = function(nombre = 'Visitante', edad = 23, trabajo = 'Developer') {
    return `Hola tienes ${edad}, tu trabajo es ${trabajo} y tu nombre es ${nombre}`;
}

console.log(saludarExpression('Juan'));

//IIFE FUNCTIONS esto ejecuta la funcion en el momento de la declaracion
(function(){
    console.log('Creando un IIFE');
})();

(function(tecnologia){
    console.log(`Aprendiendo a usar ${tecnologia}`);
})('JavaScript');


var continuar = (function(user, password){
    //Validar usuario

    return -1;
    console.log(`El usuario puede continuar`);
})('JavaScript');

if (continuar){

}
//METHOD FUNCTIONS
// Cuando una función se pone dentro de un objeto

const musica = {
    reproducir: function(id) {
        console.log(`Reproduciendo canción con id ${id} ` )
    },
    pausar: function() {
        console.log('Pausando la música  ' );
    }
}
musica.reproducir(22)
//Los métodos también pueden guardarse / crearse fuera del objeto

musica.borrar = function(id) {
    console.log(`Borrando la canción con la id ${id}`);
}

musica.reproducir(30);
musica.pausar();
musica.borrar(22);