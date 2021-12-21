var a = 'a';
let b = 'b';
const c = 'c';


functionScope = () => {
    var a = 'A';
    let b = 'B';
    const c = 'C';
    console.log("Valor global" + this.a);
    this.a = 'modificado';
    console.log("Valor local" +  a);
    console.log(`FUNCION: ${a} ${b} ${c}`);
}

functionScope();
console.log(`GLOBAL 0: ${a} ${b} ${c}`);

//SCOPE DE BLOQUE {}
if(true) {
    var a = 'AA';
    let b = 'BB';
    const c = 'CC';
    console.log(this.a);
    console.log(`BLOQUE: ${a} ${b} ${c}`);
}
console.log(this.a)
//FOR
for(let a = 0; a < 10; a++) {
    console.log(a);
}

console.log(`GLOBAL: ${a} ${b} ${c}`);