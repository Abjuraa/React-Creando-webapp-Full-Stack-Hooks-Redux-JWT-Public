const papper = {
    product: 'papper',
    price: 100,
    quantity: 10,
}


const invoices = [
    {
        id: 1,
        name: 'Compras de oficina',
        client: {
            name: 'Jhon',
            lastName: 'Doe',
        },
        items:[
            {
                product: 'Keiboard',
                price: 399,
                quantity: 2,
            },
            {
                product: 'Mouse',
                price: 200,
                quantity: 1,
            },
            papper
        ],
    }, 
    {
        id: 2,
        name: 'Compras de computacion',
        client: {
            name: 'andres',
            lastName: 'Doe',
        },
        items:[
            {
                product: 'Keiboard',
                price: 399,
                quantity: 2,
            },
            {
                product: 'monitor',
                price: 200,
                quantity: 1,
            },
            {
                product: 'cpu',
                price: 1000,
                quantity: 10,
            },
        ],
    },
    {
        id: 3,
        name: 'Compras papeleria',
        client: {
            name: 'pepe',
            lastName: 'Doe',
        },
        items:[
            {
                product: 'pencil',
                price: 200,
                quantity: 1,
            },
            papper
        ],
    }
];

const invoiceByClientName = (clientName) => {
    return invoices.find(i => i.client.name === clientName)
}

const invoiceById = (id) =>{
    return invoices.find(i => i.id === id)
} 


const findInvoiceById = (id) =>{
    const promise = new Promise((resolve, reject) => {

        setTimeout(() =>{
            const result = invoiceById(id);
            if(result){
                resolve(result);
            }else{
                reject('Error: No exite la factura por el id');
            }
        }, 2500);
    });

    return promise;
}

export{
    papper,
    invoices as default,
    invoiceByClientName,
    invoiceById,
    findInvoiceById
}