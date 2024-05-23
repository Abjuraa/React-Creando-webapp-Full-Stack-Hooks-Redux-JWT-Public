const products = ['mesa', 'silla', 'notebook', 'teclado'];
const products2 = products.concat(['pantalla LCD', 'Sony tv'])

const fruits = ['peras', 'fresas', 'manzanas', 'naranjas'];

const mercado = [...products2, ...fruits, 'sandia', 'mango', 'uvas'];

const mercado2 = products2.concat(fruits).concat('papas', 'lechuga');

console.log(products2);
console.log(mercado2);