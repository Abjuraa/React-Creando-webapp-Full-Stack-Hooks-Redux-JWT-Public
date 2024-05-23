const invoice = {
    id: 10,
    name: 'Compras de oficina',
    date: new Date(),
    client: {
        id: 1,
        name: 'Jhon',
        lastName: 'Doe',
        age: 20,
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
        {
            product: 'paper',
            price: 100,
            quantity: 10,
        },
    ],
    total: function () {
        let total = 0;
        this.items.forEach(item => {
            total = total + item.price * item.quantity;
        });
        return total;
    },
    greeting: function () {
        return `Hola ${this.client.name} ${this.client.lastName}`;
    },
};

//invoice.client.name = 'Bryam';
console.log(invoice);

const greeting = invoice.greeting();
console.log(greeting);
console.log('Total: ' + invoice.total());