const arrExtra = [ "Elit", "nulla", "consectetur", "laborum", "ipsum", "cillum", "culpa", "minim", "officia" ]
console.log(arrExtra.findIndex(palabra => palabra === 'laborum'));

const reglarNumMayor = ( valores ) => valores < 55;
const arrNumeros = [ 1, 89, 2, 18, 19, 57, 96, 88, 8, 60, 75, 71, 12, 60, 41, 15, 79, 94, 95, 99, 85, 64, 90 ]
console.log(arrNumeros.every(reglarNumMayor));

const reglaNumMenor = ( valores ) => valores > 55;
console.log(arrNumeros.some(reglaNumMenor));

const busqueda = arrExtra.filter( palabras => palabras.length > 5)
console.log(busqueda);

const multiplo = arrNumeros.map( y => y * 3 );
console.log(multiplo);