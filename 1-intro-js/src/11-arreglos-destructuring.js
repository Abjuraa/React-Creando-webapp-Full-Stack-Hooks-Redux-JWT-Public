const users = ['pepe', 'juan', 'pedro', 'antonio', 'ana', 'josefina', 'carla'];

const [pepe, juan, pedro, ...rest] = users;

console.log(pepe, juan, pedro, ...rest)
console.log(pepe, juan, pedro, rest)