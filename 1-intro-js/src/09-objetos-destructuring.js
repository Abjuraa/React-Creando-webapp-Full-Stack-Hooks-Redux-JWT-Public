const user = {
    username: 'Andres',
    email: 'andres@gmail.com',
    age: 24,
    ranking: 10
};

// const username = user.username;
// const email = user.email;
// const age = user.age;
// const ranking = user.ranking;

const {username, ranking, age} = user;

console.log(`${username} tiene ${age} años de edad`);
console.log(ranking);