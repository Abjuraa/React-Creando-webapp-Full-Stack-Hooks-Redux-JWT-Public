import PropTypes from 'prop-types';

export const RowItemVIew = ({product, price, quantity}) => {
    return(
        <>
        <tr>
            <td>{product}</td>
            <td>{price}</td>
            <td>{quantity}</td>
        </tr>  
        </>
    )
}

RowItemVIew.PropTypes= {
    product: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
}