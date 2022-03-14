//Recorrer un array con forEach
const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Aprender JavaScript'];

alert("Las tareas pendientes son:" + pendientes);
alert("La tarea pendientes en la tercera posicion es:" + pendientes[2]);

//Forma con FOR
for(let i = 0; i < pendientes.length; i++) {
    alert(`Tengo pendiente: ${pendientes[i]}`);
}

//Con forEach
pendientes.forEach((pendiente, index) => {
    alert(`La tarea en la posicion ${index} es : ${pendiente}`);
});

//Recorrer con map de un arreglo de objetos
const carrito = [
    {
        id: 1,
        producto: 'Libro'
    },
    {
        id: 2,
        producto: 'Guitarra'
    },
    {
        id: 3,
        producto: 'Disco'
    },
    {
        id: 4,
        producto: 'Camisa'
    },
    {
        id: 5,
        producto: 'Altavoz'
    }
]

const nombreProducto = carrito.map((carrito) => {
    return carrito.producto;
})

alert(nombreProducto);

//Recorrer un objeto con FOR
const automovil =  {
    modelo: 'Camaro',
    motor: 6.1,
    year: 1923,
    marca: 'Chevrolet'
}

for(let auto in automovil) {
    console.log(`${auto} : ${automovil[auto]}`);
}


//Recorrer con map de un arreglo de objetos
const carrito1 = [
    {
        id: 1,
        producto: 'Libro'
    },
    {
        id: 2,
        producto: 'Guitarra'
    },
    {
        id: 3,
        producto: 'Disco'
    },
    {
        id: 4,
        producto: 'Camisa'
    },
    {
        id: 5,
        producto: 'Altavoz'
    }
]
j = 0;
for (let elemento of carrito1) {
    j += 1;
    console.log(j);
    console.log(elemento)
    for(let field in elemento) {
        console.log(`${field} : ${elemento[field]}`);
    }
  }
  