import { useState } from "react";
import { getInvoice } from "./services/getInvoice";
import { ClientView } from "./components/clientView";
import { CompanyView } from "./components/companyView";
import { InvoiceView } from "./components/invoiceView";
import { ListItemsView } from "./components/itemsView";
import { TotalView } from "./components/totalView";

export const InvoiceApp = () => {

    const {total, id, name, client, company, items: itemsInitial} = getInvoice();

    const [formItemsState, setFormItemsState] = useState({
        product: '',
        price: '',
        quantity: '',
    });
    
    const {product, price, quantity} = formItemsState;

    const [items, setItems] = useState(itemsInitial);

    const [counter, setCounter] = useState(4);

    const onInputChange = ({target: {value, name}}) => {
        setFormItemsState({
            ...formItemsState,
            [name]: value
        });
            
    }

    const onInvoiceItemSubmit = (event) =>{
        {
            event.preventDefault();

            if(product.trim().length <= 1)return;
            if(price.trim().length <= 1)return;
            if(isNaN(price.trim())){
                alert('Error el precio no es un numero')
                return
            }
            if(quantity.trim().length < 1)return;
            if(isNaN(quantity.trim())){
                alert('Error la cantidad no es un numero')
                return
            }

            setItems ([...items, {
                id: counter,
                product: product.trim(),
                price: +price.trim(), 
                quantity: parseInt(quantity.trim(), 10)
            }]);
            setFormItemsState({
                product: '',
                price: '',
                quantity: '',
            })
            setCounter(counter + 1);
            }
    }

    return (
        <>
            <div className="container">

                <div className="card my-3">

                    <div className="card-header">
                        <h1>Ejemplo Factura</h1> 
                    </div>
                     <div className="card-body">
                        <InvoiceView id ={id} name ={name}/>

                        <div className="row my-4">

                            <div className="col">
                                <ClientView title ="Datos del Cliente" client ={client}/>
                            </div>

                            <div className="col">
                                <CompanyView title ="Datos de la Empresa" company ={company}/>
                            </div>

                        </div>

                        <ListItemsView title = "Listado de Productos" items = {items}/>
                        <TotalView total = {total}/>
                        <form className="w-50" onSubmit={onInvoiceItemSubmit}>

                            <input 
                                type="text" 
                                name ="product" 
                                value = {product}
                                placeholder="Producto" 
                                className="form-control m-3"
                                onChange={onInputChange}/>
                            <input 
                                type="text" 
                                name ="price" 
                                value={price}
                                placeholder="Precio" 
                                className="form-control m-3"
                                onChange={event => onInputChange(event)}/>
                            <input 
                                type="text" 
                                name ="quantity" 
                                value={quantity}
                                placeholder="Cantidad" 
                                className="form-control m-3"
                                onChange={onInputChange}/>
                                <button 
                                    type="submit" 
                                    className="btn btn-primary m-3">
                                    Crear item
                                </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
};