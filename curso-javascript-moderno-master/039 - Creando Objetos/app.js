//Object Literal

const cliente = {
    nombre: 'Juan',
    saldo: 100,
    tipoCliente: () => {
        let tipo;

        if(cliente.saldo > 1000){
            tipo = 'Gold';
        }else if(cliente.saldo > 500){
            tipo = 'Platino';
        } else {
            tipo = 'Normal';
        }

        return tipo;
    }
};

console.log(cliente.saldo);
console.log("Tipo cliente con nombre :  " + cliente.nombre+" tipo:" + cliente.tipoCliente())

cliente.nombre = "Alfredo"
cliente.saldo = 4000
console.log("Tipo cliente con nombre :  " + cliente.nombre+" tipo:" + cliente.tipoCliente())

//Método alternativo (mejor)
/*function FuncCrearCliente(nombre, saldo) {
    
    this.nombre = nombre;
    this.saldo = saldo;
    this.tipoCliente = function() {
        let tipo;
        
        if(this.saldo > 1000){
            tipo = 'Gold';
        }else if(this.saldo > 500) { 
            tipo = 'Platino';
        }else{
            tipo = 'Normal';
        }

        return tipo;
    }
}

const persona = new cliente('Pedro', 20000);
const persona2 = new cliente('Karen', 60000);

console.log(persona.tipoCliente());
console.log(persona);
console.log(persona2);
console.log(persona2.tipoCliente());
*/