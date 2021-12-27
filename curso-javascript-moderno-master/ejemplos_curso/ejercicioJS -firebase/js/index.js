// Import the functions you need from the SDKs you need
//import { initializeApp } from  "https://www.gstatic.com/firebasejs/9.6.1/firebase.js";
//import {getAuth, onAuthStateChanged,signInWithEmailAndPassword,signOut } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-Auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

//Objetos para eventos
const loginBtn = document.getElementById('login');
const logoutBtn = document.getElementById('logout');
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

//Detect auth is changed
onAuthStateChanged(auth, user => {
  if(user != null){
    console.log("Usuario introducido ");
  }else
  {
    console.log("Sin usuario")
  }
})

//LISTENERS
/*cargarEventListeners();

function cargarEventListeners(){
    //Dispara cuando se presiono "login"
    loginBtn.addEventListener('click', loginUsername);
    //Dispara cuando se presiono "logout"
    logoutBtn.addEventListener('click', logOutUsername);
}*/
function loginUsername(){
  console.log("validando usuario");
  var email = document.getElementById("usuario");
  var password = document.getElementById("password");
  console.log("validando usuario:" + email +":" + password );
  auth.signInWithEmailAndPassword(email, password).then(function() {
    //NEED TO PULL USER DATA?
    alert("Bien venido a la aplicacion");
    redirect("/");
  }).catch(function(error) {
    alert("usuario no válido");
    toast(error.message,7000);
  });              
}
function logOutUsername(){
   auth.signOut().then(function() {
    //NEED TO PULL USER DATA?
    alert("Gracias por visitarnos");
    redirect("/");
  }).catch(function(error) {
    toast(error.message,7000);
  });              
}
var database = app.database();
