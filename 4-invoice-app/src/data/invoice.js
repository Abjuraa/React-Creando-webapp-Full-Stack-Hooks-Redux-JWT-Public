export const invoice ={
    id: 10,
    name: 'Componentes PC',
    client: {
        name: 'Pepe',
        lastname: 'Doe',
        address: {
            country: 'USA',
            city: 'Los Angeles',
            street: 'One Street',
            number: 12
        }
    },
    company: {
        name: 'New Egg',
        fiscalNumber: 123456789,
    },
    items: [
        {
            id: 1,
            product: 'CPU Intel i7',
            price: 499,
            quantity: 1,
        },
        {
            id: 2,
            product: 'Corsair Keirboard Mecanico',
            price: 150,
            quantity: 2,
        },
        {
            id:3,
            product: 'Monitor Asus',
            price: 350,
            quantity: 1,
        },
    ]
}