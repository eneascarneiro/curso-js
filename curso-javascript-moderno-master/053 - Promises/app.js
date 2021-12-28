//Promises
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }
  
//resolve: cuando se ha podido resolver (la promesa se cumple)
//reject: cuando ha habido un error (la promesa no se cumple)
//
function mostar_mensaje(){
    console.log(Math.floor(Date.now() / 1000))
    console.log("mensaje")
}
function mostar_mensaje_2(){
    console.log(Math.floor(Date.now() / 1000))
    console.log("mensaje el otro")
}
function mostar_mensaje_3(){
    console.log("1 seg" +Math.floor(Date.now() / 1000))
    console.log("mensaje el otro con 1 seg de espera")
    console.log("1 seg" + Math.floor(Date.now() / 1000))
    sleep(1000)
    console.log("1 seg" + Math.floor(Date.now() / 1000))
}
function cargar_catalogos(callback){
    setTimeout(function() {
        callback();
    }, 2000);
    console.log("catalogo cargado")
}
console.log(Math.floor(Date.now() / 1000))
cargar_catalogos(mostar_mensaje);
console.log(Math.floor(Date.now() / 1000))
cargar_catalogos(mostar_mensaje_2);
console.log(Math.floor(Date.now() / 1000))
mostar_mensaje_3();

//EJEMPLO CON RESOLVE
const esperando = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(Math.floor(Date.now() / 1000))
        resolve('Se ejecutó');
    }, 5000);
});

esperando.then((mensaje) => {
    console.log(mensaje);
});
console.log(Math.floor(Date.now() / 1000))

//EJEMPLO CON REJECT
const aplicarDescuento = new Promise((resolve, reject) => {
    const descuento = false;

    if(descuento) {
        resolve('Descuento Aplicado');
    }else{
        reject('No se puede aplicar el descuento');
    }
});

//Si no ponemos el catch saldrá como un error
aplicarDescuento.then((resultado) => {
    console.log(resultado);
}).catch((error) => {
    console.log(error);
});