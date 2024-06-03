import PropTypes from 'prop-types';

import { RowItemVIew } from "./rowItemView"

export const ListItemsView = ({title, items, id}) => {

    return (
        <>
            <h4>{title}</h4>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(({product, price, quantity}) => (
                     <RowItemVIew key={id} product={product} price ={price} quantity={quantity}/>
                    ))}

                </tbody>
            </table>
        </>
    )
}

ListItemsView.propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
}