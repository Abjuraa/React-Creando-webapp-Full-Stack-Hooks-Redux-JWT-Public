
import PropTypes from 'prop-types';
import {Title} from './components/Title';
import {UserDetail} from './components/UserDetail';
import {Book} from './components/Book';

export const HelloWorldApp = ({user, id, title, book}) => {

    console.log(title)
    // const name = 'pepe';
    
    return (
        <>
            <Title  title = {title}/>
            <UserDetail user = {user} id = {id} />
            <Book book = {book} />
        </>
    )
}

HelloWorldApp.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    user: PropTypes.object.isRequired,
}

HelloWorldApp.defaultProps = {
    title: 'Hola Mundo por defecto!',
    book: 'Libro por defecto!',
}