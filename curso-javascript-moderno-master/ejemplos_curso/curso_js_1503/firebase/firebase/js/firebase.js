import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth, signOut,signInWithEmailAndPassword } from  "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
const userLogged = false
export function ConectarFirebase(){
    // Import the functions you need from the SDKs you need

    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    const firebaseConfig = {
    apiKey: "AIzaSyD_qwPFSCaueiiu1WS-k7j_fTlBE4KBiSo",
    authDomain: "micatalogojma.firebaseapp.com",
    projectId: "micatalogojma",
    storageBucket: "micatalogojma.appspot.com",
    messagingSenderId: "1042617777336",
    appId: "1:1042617777336:web:b2af904bbab9fdfea7484d"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
}


export function LoginUsuario(){
    //Leer usario y password
    const email = document.getElementById("usuario").value
    const password = document.getElementById("password").value 
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        alert( "Hola como estás?")
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
}
export function Logout(){
    if (!userLogged ){
        alert ("el usuario no esta logado")
    } else{
    const auth = getAuth();
    firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        signOut(auth).then(() => {
        // Sign-out successful.
        alert("encantado de conocerte")
        }).catch((error) => {
        // An error happened.
        });
    } else {
        // No user is signed in.
        alert ("el usuario no esta logado")
    }
    });
    }
}