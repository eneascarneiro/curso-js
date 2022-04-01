//En JavaScript existe un objeto llamad Date
var diaHoy = new Date();

console.log(diaHoy);
document.getElementById("txt1").value = diaHoy;

//Fecha en especifico
let navidad2017 = new Date('12-25-2017');
let navidad2017 = new Date('12:25:2017');

console.log(navidad2017);

//Mes
let mes = diaHoy.getMonth();
document.getElementById("txt2").value = mes;
//diaHoy.setMonth(9);
//diaHoy.setHours(340,59,001);
document.getElementById("txt3").value = diaHoy;
//Le añadimos uno porque cuenta a partir de 0
console.log(mes+1);

//Día
console.log(diaHoy.getDate());

console.log(diaHoy.getDay());

//Año
console.log(diaHoy.getFullYear());

//Minutos
console.log(diaHoy.getMinutes());

//Hora
console.log(diaHoy.getHours());

//Segundos
console.log(diaHoy.getSeconds());

//El tiempo desde 1970 en ms
console.log(diaHoy.getTime());
document.getElementById("txt4").value = diaHoy.getTime();
//Para modificar el valor del año
console.log(diaHoy.setFullYear(2017));
console.log(diaHoy.getFullYear());

//Concersion a json importante para llamar con fechas a servicios (APIs)
document.getElementById("txt5").value = diaHoy.toJSON();