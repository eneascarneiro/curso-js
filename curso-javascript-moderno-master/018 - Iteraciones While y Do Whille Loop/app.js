let i = 0;

while(i < 10) {

    if(i === 5) {
        console.log('Cinco');
        i=10;
        continue;
    }
    console.log(`Numero: ${i}`);
    i++;
}

for(let i = 0; i < 10; i++) {
    if(i == 5) {
        console.log(`Voy en el ${i}`);
    }
    console.log(`Numero ${i}`);

}

//Recorrer Array
const musica = ['Cancion 1', 'Cancion 2', 'Cancion 3'];

let j = 0;

while(j < musica.length) {
    console.log(`Reproduciendo la cancion ${musica[j]}`);
    j++;
}