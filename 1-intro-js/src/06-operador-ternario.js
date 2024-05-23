const average = 5.9;

let statu2 = '';

statu2 = (average >= 5.5) ? 'Aprobado' : 'Reprobado';

console.log(statu2)

//if(average >= 5.5){
//    statu2 = 'Aprobado';
//} else {
//    statu2 = 'Reprobado';
//}
console.log(`Resultado: ${statu2}`);

let max = 0;

const a = 5;
const b = 8;
const c = 12;

max = a > b ? a : b;
max = max > c ? max : c;

console.log(`El numero mayos es ${max}`)