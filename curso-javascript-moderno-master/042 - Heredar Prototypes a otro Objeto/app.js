function Catalogo(nombre_prod, precio,desc) {
    this.nombre_prod = nombre_prod;
    this.precio = precio;
    this.desc = desc
}


//Prototipo que ofrece datos prod saldo y nombre
Catalogo.prototype.datosProducto = function() {
    return `Nombre ${this.nombre_prod}, el precio es ${this.precio}`;
}
function Cliente(nombre, saldo,nombre_prod, precio,desc) {
    //Heredo
    Catalogo.call(this, nombre_prod, precio,desc);
    this.nombre = nombre;
    this.saldo = saldo;
}
//Heredamos el metodo nombreClienteSaldo
Cliente.prototype = Object.create(Catalogo.prototype);

//Prototipo que imprime saldo y nombre
Cliente.prototype.nombreClienteSaldo = function() {
    return `Nombre ${this.nombre}, tu saldo es de ${this.saldo}`;
}

const cliente1 = new Cliente('Pedro', 100,'uno','10','rr');


console.log(cliente1);

console.log(cliente1.nombreClienteSaldo());

//Banca para empresas
function Empresa(nombre, saldo, telefono, tipo,nombre_prod, precio,desc) {
    //Heredo
    Cliente.call(this, nombre, saldo,nombre_prod, precio,desc);
    this.telefono = telefono;
    this.tipo = tipo;
}

//Heredamos el metodo nombreClienteSaldo
Empresa.prototype = Object.create(Cliente.prototype);

const empresa = new Empresa('Udemy', 10000000, 12345678, 'Educación','uno','10','rr');



console.log(empresa);

console.log(empresa.nombreClienteSaldo());