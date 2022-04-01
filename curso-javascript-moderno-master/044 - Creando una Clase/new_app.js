class AlumnosCalderon {
    constructor() {
        this.ArrayAlumnos = [];
        this.Nombre = ""
        this.Apellido ="" 
        this.telefono = ""
    }
    //Nombre
    setNombre(nombre){
        this.Nombre = nombre
    }
    getNombre(){
        return this.Nombre
    }
    //Apellido
    setApellido(Apellido){
        this.Apellido = Apellido
    }
    getApellido(){
        return this.Apellido
    }
    //Apellido
    settelefono(telefono){
        this.telefono = telefono
    }
    gettelefono(){
        return this.telefono
    }
    //Añadir datos al array
    AddAlumno(){
        this.Nombre
        this.Apellido
        this.telefono
        const infoAlumno = {
            imagen: curso.querySelector('img').src,
            titulo: curso.querySelector('h4').textContent,
            precio: curso.querySelector('.precio span').textContent,
            id: curso.querySelector('a').getAttribute('data-id')
        }
        this.ArrayAlumnos.push(infoAlumno)
    }

}

const misAlumnos = new AlumnosCalderon()
