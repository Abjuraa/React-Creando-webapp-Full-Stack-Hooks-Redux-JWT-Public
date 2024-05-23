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
]

const invoicesName = invoices.map(i => i.name);
console.log(invoices)
console.log(invoicesName)


const invoicesClient = invoices.map(i => i.client.name);
console.log(invoicesClient)


const invoiceById = invoices.find(i => i.id === 2)
console.log(invoiceById)


const invoiceByClientName = invoices.find(i => i.client.name === 'pepe')
console.log(invoiceById)

const invoiceFilter = invoices.filter(i => i.id > 1)
console.log(invoiceFilter)


console.log('Filtro eliminar')
const invoiceDeleted = invoices.filter(i => i.id !== 2)
console.log(invoiceDeleted)


const invoiceFilter2 = invoices.filter(i => i.items.includes(papper))
console.log(invoiceFilter2)

const result = invoices.some(i => i.client.name === 'juan')
console.log(result)
