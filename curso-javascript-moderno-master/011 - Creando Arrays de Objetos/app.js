//Crear un array de objetos
const autos = [
    {
        modelo: 'Mustang',
        motor: 6.4
    },
    {
        modelo: 'Ferrari',
        motor: 6.1
    },
    {
        modelo: 'Challenger',
        motor: 6.2
    }
];
autos[0].modelo.length
//Para verlos todos
console.log(autos);

//Para acceder al primero
console.log(autos[0]);

//Para mostrarlos todos uno a uno
for(let i = 0; i < autos.length; i++) {
    console.log(`Modelo: ${autos[i].modelo}, motor: ${autos[i].motor}`);
}

//Array de personas
var arrPersonas =[
    {
        nombre: 'Miguel',
        apellido: 'Martinez',
        profesion: 'Diseñador gráfico',
        email: 'mail@mail.com',
        edad: 20,
        musica: ['rock', 'metal', 'grunge'],
        hogar: {
            ciudad: {
                    nombreCiudad: 'Guadalajara',
                    dirección: 'Via Luis 15',
                    numero: 10
                    },
            pais: 'Mexico'
        },
        nacimiento: () => {
            return new Date().getFullYear() - this.edad;
        },
        nacimientoBisiesto: (num) => {
            return new Date().getFullYear() - this.edad - num;
        }
    },
        {
            nombre: 'Luisa',
            apellido: 'Martinez',
            profesion: 'Diseñador gráfico',
            email: 'mail@mail.com',
            edad: 20,
            musica: ['rock', 'metal', 'grunge'],
            hogar: {
                ciudad: {
                        nombreCiudad: 'Guadalajara',
                        dirección: 'Via Luis 15',
                        numero: 10
                        },
                pais: 'Mexico'
            },
            nacimiento: () => {
                return new Date().getFullYear() - this.edad;
            },
            nacimientoBisiesto: (num) => {
                return new Date().getFullYear() - this.edad - num;
            }
        },
            {
                nombre: 'Norberto',
                apellido: 'Martinez',
                profesion: 'Diseñador gráfico',
                email: 'mail@mail.com',
                edad: 20,
                musica: ['rock', 'metal', 'grunge'],
                hogar: {
                    ciudad: {
                            nombreCiudad: 'Guadalajara',
                            dirección: 'Via Luis 15',
                            numero: 10
                            },
                    pais: 'Mexico'
                },
                nacimiento: () => {
                    return new Date().getFullYear() - this.edad;
                },
                nacimientoBisiesto: (num) => {
                    return new Date().getFullYear() - this.edad - num;
                }
            }
]

console.log(arrPersonas[2].hogar.ciudad.nombreCiudad);
var i = 0
//Para mostrarlos todos uno a uno
for( i = 0; i < arrPersonas.length; i++) {
    console.log(arrPersonas[i].hogar.ciudad.nombreCiudad);
    for (let j= 0; j < arrPersonas[i].musica.length; j++){
        console.log(arrPersonas[i].musica[j]);
    }
}

arrPersonas.forEach((persona,index) =>{
    console.log(persona.hogar.ciudad.nombreCiudad);

})