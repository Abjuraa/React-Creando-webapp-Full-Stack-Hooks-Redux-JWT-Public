
import PropTypes from 'prop-types';
export const HelloWorld = ({user, id, title, book}) => {

    console.log(title)
    // const name = 'pepe';
    
    return (
        <div>
            <h1>{title}</h1>
            <div>Que tal! {user.name} {user.lastname} con el id {id}</div>
            <div>{book}</div>
        </div>
    );
}

HelloWorld.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    user: PropTypes.object.isRequired,
}

HelloWorld.defaultProps = {
    title: 'Hola Mundo por defecto!',
    book: 'Libro por defecto!'
}