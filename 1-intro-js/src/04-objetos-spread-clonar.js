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

//const invoice2 = invoice;
const invoice2 = {...invoice};

const result = invoice === invoice2;

if(result){
    console.log('No son iguales');
}

invoice2.id = 20;

console.log(invoice);
console.log(invoice2);