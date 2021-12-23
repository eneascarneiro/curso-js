//Variables
const listaTweets = document.getElementById('lista-tweets');

//Event Listeners
eventListeners();

//Funciones
function eventListeners() {
    //Cuando se envie el formulario
    document.querySelector('#formulario').addEventListener('submit', agregarTweet);

    //Borrar Tweets
    listaTweets.addEventListener('click', borrarTweet);

    //Contenido cargado
    document.addEventListener('DOMContentLoaded', localStorageListo);
}

//Añadir Tweet del Formulario
function agregarTweet(e){
    e.preventDefault();

    //Leer el valor del textarea
 

    //Crear boton de eliminar
    
    
    //Crear elemento  añadirle el contenido a la lista
    
    //Añade el boton de borrar al Tweet

    //Añade el tweet a la lista


    //Añadir a Local Storage


    //Borramos el textarea
  
}

//Borrar Tweet del DOM y del Local Storage
function borrarTweet(e) {
    e.preventDefault();
    
}

//Mostrar datos de LocalStorage en la lista
function localStorageListo() {
    let tweets; 

    tweets = obtenerTweetsLocalStorage();

    tweets.forEach((tweet) => {
        //Crear boton de eliminar
        
        
        //Crear elemento  añadirle el contenido a la lista
        
        //Añade el boton de borrar al Tweet
        
        //Añade el tweet a la lista
        
    });
}

//Agregar Tweet a Local Storage
function agregarTweetLocalStorage(tweet) {
    let tweets;

    //Guardamos todo lo que tenemos


    //Añadir el nuevo tweet


    //Convertir de string a arreglo para Local Storage

}

//Comprobar que haya elementos en Local Storage
function obtenerTweetsLocalStorage() {
  
}

//Eliminar Tweet del Local Storage
function borrarTweetLocalStorage(tweet) {
  
}