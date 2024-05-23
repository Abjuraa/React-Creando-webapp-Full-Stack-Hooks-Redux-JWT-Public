const user = {
    username: 'Andres',
    email: 'andres@gmail.com',
    age: 24,
    ranking: 10
};

const detail = ({username, email}) => {
    console.log(`El detalle del usuario ${username} con el correo ${email}`);
}
detail(user);