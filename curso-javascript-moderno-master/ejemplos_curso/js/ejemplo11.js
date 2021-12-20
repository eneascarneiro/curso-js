//ejemplo de como recorrer un array complejo
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
        nacimiento: (edad) => {
            return new Date().getFullYear() - edad;
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
            nacimiento: (edad) => {
                return new Date().getFullYear() - edad;
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
                nacimiento: (edad) => {
                    return new Date().getFullYear() - edad;
                }
            }
]
arrPersonas.forEach((persona, index) => {
        alert(`La persona nombre  ${persona.nombre} vive en  : ${persona.hogar.ciudad.dirección} y tiene la posicion en al array ${index}`);
        //Si encuentro a norberto dime su edad
        if (persona.nombre == "Luisa"){
            alert(` ${persona.nombre} nacio el año: ${persona.nacimiento(persona.edad)}`)
        }
});