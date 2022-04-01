
//Declaramos las variables para autenticarse
import { getAuth, signInWithEmailAndPassword,signOut } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
import { getFirestore,collection, getDocs } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";
const         firebaseConfig = {
    apiKey: '',
    authDomain: '',
    databaseURL: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
}
const initFirebase = async () =>  {
    const firebase =  await import("https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js");


        var respuesta = "Sin valor";
        // Crear el objeto xmlhttprequest
        const xhr = new XMLHttpRequest();

        // Abrir una conexión
        xhr.open('GET', 'config.json', true);

        //FORMA NUEVA
        // Una vez que carga
        // xhr.onload = function() {
        //     //200: Correcto
        //     //403: Prohibido 
        //     //404: No encontrado
        //     if(this.status === 200) {
        //         document.getElementById('listado').innerHTML = `<h1>${this.responseText}</h1>`;
        //     }
        // }

        xhr.onreadystatechange = function () {
            //Ready status
            /* 
            0 - No inicializado
            1 - Conexión establecida
            2 - Recibido
            3 - Procesado
            4 - Respuesta lista
            */
            console.log(`Estado ${this.readyState}`);

            if (this.readyState === 4 && this.status === 200) {
                //Para sacar el contenido se recomienda llamar a una función
                //convertir a array el json
                var configuration = JSON.parse(this.responseText);
                //asignar valores
                firebaseConfig.apiKey = configuration.apiKey;
                firebaseConfig.authDomain = configuration.authDomain;
                firebaseConfig.projectId = configuration.projectId;
                firebaseConfig.storageBucket = configuration.storageBucket;
                firebaseConfig.messagingSenderId = configuration.messagingSenderId;
                firebaseConfig.appId = configuration.appId;
                firebaseConfig.measurementId = configuration.measurementId;

                // Initialize Firebase
                console.log(firebaseConfig);
                var app = firebase.initializeApp(firebaseConfig);
                
            }
            

        }

        console.log("antes del send")
        // Enviar el request
        xhr.send();

        
    }
export function InitProcess () {
    console.log("Ejecutando InitProcess")
    initFirebase()
}
// para comprobar si ejecuté login
export function testExport () {
    return "tyryrgyrtry"
};

export function loginUsername(){
    //Leer usuario y password
    const userName = document.getElementById("usuario").value;
    const userPaswd = document.getElementById("password").value;
    console.log(userPaswd + ":" + userName)
    //Objeto para autenticar usuario
    const  auth =  getAuth()
    signInWithEmailAndPassword(auth, userName, userPaswd)
    .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        // ...
        alert( "Bien venido :" + userName);
        //creamos el objeto para conectar a la base de datos
        const db = getFirestore();
        //Generamos el catálogo
        const querySnapshot =  getDocs(collection(db, "productos"));
        var intNumElemRow = 1;
        //Empezamos buscando al padre
        const elementoPadre = document.querySelector('#lista-cursos');
        //Añadimos el h1
        const elemH1 = document.createElement('h1');
        //Agregamos una clase
        elemH1.className = 'encabezado';
        elemH1.id =  'encabezado';
        //Añadimos el texto
        elemH1.appendChild(document.createTextNode('Cursos En Línea'));
        //Lo insertamos
        elementoPadre.appendChild(elemH1);
        var newRow = ""
        console.log("antes de querySnapshot ")
        querySnapshot.forEach((doc) => {
            console.log(doc)
            const elementoCatalogo = doc.data();
            console.log(elementoCatalogo.titulo);
            //Rellenamos las filas
            if (intNumElemRow == 1){
                console.log("creando  la fila")
                //estoy empezando fila, creo una nueva
                newRow =  document.createElement('div');
                newRow.className = "row";
                var newElemFourColums =  document.createElement('div');
                newElemFourColums.className = "four columns";
                //Card
                var newElemCard =  document.createElement('div');
                newElemCard.className = "card";
                //Imagen 1
                var newElemImagen1 =  document.createElement('img');
                newElemImagen1.className = "imagen-curso u-full-width";
                newElemImagen1.src = elementoCatalogo.imagen1;
                //Info-card
                var newElemInfoCard =  document.createElement('div');
                newElemInfoCard.className = "info-card";
                //H4
                const elemH4 = document.createElement('h4');
                //Añadimos el texto
                elemH4.appendChild(document.createTextNode(elementoCatalogo.titulo));
                //Nombre
                var newElemNombre =  document.createElement('p');
                //Añadimos el texto
                newElemNombre.appendChild(document.createTextNode(elementoCatalogo.nombre));
                //Imagen estrellas
                var newElemImagenEstrellas =  document.createElement('img');
                newElemImagenEstrellas.src = elementoCatalogo.imagen_estrellas;
                //Añadimos el span
                var newSpan =  document.createElement('span');
                newSpan.className = "u-pull-right";
                newSpan.appendChild(document.createTextNode("$15"));
                //Precio
                var newElemPrecio =  document.createElement('p');
                newElemPrecio.className = "precio";
                //Añadimos el texto
                newElemPrecio.appendChild(document.createTextNode(elementoCatalogo.precio));
                newElemPrecio.appendChild(newSpan);
                //Referencia
                var newElemRef =  document.createElement('a');
                newElemRef.className = "u-full-width button-primary button input agregar-carrito";
                newElemRef.dataid = elementoCatalogo.dataid;
                newElemRef.href = "#";
                newElemRef.appendChild(document.createTextNode("Agregar Al Carrito"));
                //Componemos info card
                newElemInfoCard.appendChild(elemH4);
                newElemInfoCard.appendChild(newElemNombre);
                newElemInfoCard.appendChild(newElemImagenEstrellas);
                newElemInfoCard.appendChild(newElemPrecio);
                newElemInfoCard.appendChild(newElemRef);
                //Componemos card
                newElemCard.appendChild(newElemImagen1);
                newElemCard.appendChild(newElemInfoCard);
                //Componemos four col
                newElemFourColums.appendChild(newElemCard);
                //Añadimos al row
                newRow.appendChild(newElemFourColums);
                intNumElemRow = intNumElemRow +1;
            }else{
                console.log("añadiendo elemento a la fila")
                //añado elemento a fila existente
                var newElemFourColums =  document.createElement('div');
                newElemFourColums.className = "four columns";
                var newElemCard =  document.createElement('div');
                newElemCard.className = "card";
                //Imagen 1
                var newElemImagen1 =  document.createElement('img');
                newElemImagen1.className = "imagen-curso u-full-width";
                newElemImagen1.src = elementoCatalogo.imagen1;
                //Info-card
                var newElemInfoCard =  document.createElement('div');
                newElemInfoCard.className = "info-card";
                //H4
                const elemH4 = document.createElement('h4');
                //Añadimos el texto
                elemH4.appendChild(document.createTextNode(elementoCatalogo.titulo));
                //Nombre
                var newElemNombre =  document.createElement('p');
                //Añadimos el texto
                newElemNombre.appendChild(document.createTextNode(elementoCatalogo.nombre));
                //Imagen estrellas
                var newElemImagenEstrellas =  document.createElement('img');
                newElemImagenEstrellas.src = elementoCatalogo.imagen_estrellas;
                //Añadimos el span
                var newSpan =  document.createElement('span');
                newSpan.className = "u-pull-right";
                newSpan.appendChild(document.createTextNode("$15"));
                //Precio
                var newElemPrecio =  document.createElement('p');
                newElemPrecio.className = "precio";
                //Añadimos el texto
                newElemPrecio.appendChild(document.createTextNode(elementoCatalogo.precio));
                newElemPrecio.appendChild(newSpan);
                //Referencia
                var newElemRef =  document.createElement('a');
                newElemRef.className = "u-full-width button-primary button input agregar-carrito";
                newElemRef.dataid = elementoCatalogo.dataid;
                newElemRef.href = "#";
                newElemRef.appendChild(document.createTextNode("Agregar Al Carrito"));
                //Componemos info card
                newElemInfoCard.appendChild(elemH4);
                newElemInfoCard.appendChild(newElemNombre);
                newElemInfoCard.appendChild(newElemImagenEstrellas);
                newElemInfoCard.appendChild(newElemPrecio);
                newElemInfoCard.appendChild(newElemRef);
                //Componemos card
                newElemCard.appendChild(newElemImagen1);
                newElemCard.appendChild(newElemInfoCard);
                //Componemos four col
                newElemFourColums.appendChild(newElemCard);
                //Añadimos al row
                newRow.appendChild(newElemFourColums);
                //Si estoy escribiendo el tercer elemento empiezo fila
                if (intNumElemRow == 3){
                    intNumElemRow = 1;
                    elementoPadre.appendChild(newRow);
                }
                else{
                    intNumElemRow = intNumElemRow +1;
                }
            }
        });
        if (intNumElemRow < 3 && intNumElemRow > 1){
                elementoPadre.appendChild(newRow);
        }
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
    });

}
export function logOutUsername(){
    const auth = getAuth()
    let user = auth.currentUser;
    if (user) {
        // User is signed in.
        
        signOut(auth).then(function() {
            //NEED TO PULL USER DATA?
            alert("Gracias por visitarnos");
            redirect("/");
        })
        .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
            });
    } else {
        // No user is signed in.
        alert("El usuario no estaba logeado");
    }
}
