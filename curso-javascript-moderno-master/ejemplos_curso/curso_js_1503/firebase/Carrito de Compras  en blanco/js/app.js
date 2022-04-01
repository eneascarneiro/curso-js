import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth, signOut,signInWithEmailAndPassword } from  "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

//Aqui ponemos el código javascript
var arrayJsonCatalogo =  [
    {
        imagen1: 'img/curso1.jpg',
        h4: 'HTML5, CSS3, JavaScript para Principiantes',
        nombre: 'Luis Perez',
        ciudad: 'Madrid',
        imagen2: 'img/estrellas.png',
        precio: 200,
        precio_descuento: 15
    },
    {
        imagen1: 'img/curso2.jpg',
        h4: 'Curso de Comida Vegetariana',
        nombre: 'Juan Perez',
        ciudad: 'Cádiz',
        imagen2: 'img/estrellas.png',
        precio: 300,
        precio_descuento: 25
    }
    ,
    {
        imagen1: 'img/curso3.jpg',
        h4: 'Curso de Comida para gatos',
        nombre: 'Angela Perez',
        ciudad: 'Valencia',
        imagen2: 'img/estrellas.png',
        precio: 400,
        precio_descuento: 200
    }
    ,
    {
        imagen1: 'img/curso3.jpg',
        h4: 'Curso de Comida para elefantes',
        nombre: 'Pepe Perez',
        ciudad: 'Gibraltar',
        imagen2: 'img/estrellas.png',
        precio: 400,
        precio_descuento: 200
    }
]
var micaja = document.getElementById("lista-cursos")
function generarCatalogo(){
    //Aqui hay que generar 
    /*
    divN1 <div class="row">
    divN2            <div class="four columns">
    divN3                <div class="card">
    img1                    <img src="img/curso1.jpg" class="imagen-curso u-full-width">
    divN4                    <div class="info-card">
    h4                        <h4>HTML5, CSS3, JavaScript para Principiantes</h4>
    p1                        <p>Juan Pedro</p>
    img2                        <img src="img/estrellas.png">
    p2                        <p class="precio">$200  
    span1                                <span class="u-pull-right ">$15</span>
                            </p>
                            <p> Ciudad </p>
    a1                        <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="1">Agregar Al Carrito</a>
                        </div>
                    </div> <!--.card-->
                </div>
    </div> <!--.row-->
    */ 
    //E incluirlo en lista-cursos

    //Praparamos que no insertamos
    let divN1 = document.createElement("div")
    divN1.setAttribute("class","row")
    const  man_num_col_row =  3
    let num_col = 1
    arrayJsonCatalogo.forEach((curso, index) => {
        //¿En que columna estoy?
        //Si estoy en el primer elemento tengo que crear la fila
        if (num_col == 1){
            //Praparamos que no insertamos
            let divN1 = document.createElement("div")
            divN1.setAttribute("class","row")
        }
        //Hay un maximo de 3 elementos por fila
        //divN2
        let divN2 = document.createElement("div")
        divN2.setAttribute("class","four columns")
        //divN3
        let divN3 = document.createElement("div");
        divN3.setAttribute("class","card");

        //divN4
        let divN4 = document.createElement("div");
        divN4.setAttribute("class","info-card");

        //img1
        let img1 = document.createElement("img");
        img1.setAttribute("src", curso.imagen1);
        img1.setAttribute("class", "imagen-curso u-full-width");
        console.log("1")
        //H4
        let titulo4 = document.createElement("H4");
        let texto_t4 = document.createTextNode(curso.h4);
        titulo4.appendChild(texto_t4);  // El texto es un nodo, se crea el elemento padre
        console.log("2")
        //p1
        let p1 = document.createElement("p");
        let texto_p1 = document.createTextNode(curso.nombre)
        p1.appendChild(texto_p1);  // El texto es un nodo, se crea el elemento padre
        console.log("3")
        //img2
        let img2 = document.createElement("img");
        img2.setAttribute("src", curso.imagen2);
        console.log("4")
        //p2
        let p2 = document.createElement("p");
        p2.setAttribute("class","precio");
        let texto_p2 = document.createTextNode("$" + curso.precio);
        p2.appendChild(texto_p2);  // El texto es un nodo, se crea el elemento padre

        //span1
        let span1 = document.createElement("span");
        span1.setAttribute("class","u-pull-right");
        let texto_span1 = document.createTextNode("$" + curso.precio_descuento);
        span1.appendChild(texto_span1);   // El texto es un nodo, se crea el elemento padre
        console.log("5")
        //a1
        let a1 = document.createElement("a");
        a1.setAttribute("href","#");
        a1.setAttribute("class","u-full-width button-primary button input agregar-carrito");
        a1.setAttribute("data-id",index);
        let texto_a1 = document.createTextNode("Agregar Al Carrito");
        a1.appendChild(texto_a1)
        console.log("6")
        // Añado los elementos al HTML
        // Empiezamos desde el último elemento
        // Añado span1 a p2
        console.log("7")
        p2.appendChild(span1);
        // Añado div4
        divN4.appendChild(titulo4);
        divN4.appendChild(p1);
        divN4.appendChild(img2);
        divN4.appendChild(p2);
        divN4.appendChild(a1);
        console.log("8")
        // Añado div3
        divN3.appendChild(img1);
        divN3.appendChild(divN4);
        // Añado div2
        console.log("9")
        divN2.appendChild(divN3);
        // Añado div1
        divN1.appendChild(divN2);
        console.log("10")
        if (num_col == man_num_col_row){
            //Si estoy en la última columna escribo en la caja y vuelvo a la 
            //primera columna
            console.log("11--")
            micaja.appendChild(divN1);
            console.log("11")
            num_col = 1
        } else{
            num_col ++
        }
    })
    console.log("12")
        // Añado micaja
        
        micaja.appendChild(divN1);
        console.log("13")
    //Aqui comienza la gestión de eventos
    //Defino las variables(mandos a distancia ) para manejar los elementos de la página
}




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
        alert("Estas dentro")
        generarCatalogo()
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("error.code :" + error.code + ", error.message" + error.message )
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