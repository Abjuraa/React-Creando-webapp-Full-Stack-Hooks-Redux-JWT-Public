import invoices, {papper, invoiceByClientName} from './data/invoices';

const invoicesName = invoices.map(i => i.name);
console.log(invoices)
console.log(invoicesName)


const invoicesClient = invoices.map(i => i.client.name);
console.log(invoicesClient)


const invoiceById = invoices.find(i => i.id === 2)
console.log(invoiceById)


//const invoiceByClientName = invoices.find(i => i.client.name === 'pepe')
console.log('Buscar por nombre de cliente')
console.log(invoiceByClientName('pepe'))

const invoiceFilter = invoices.filter(i => i.id > 1)
console.log(invoiceFilter)


console.log('Filtro eliminar')
const invoiceDeleted = invoices.filter(i => i.id !== 2)
console.log(invoiceDeleted)


const invoiceFilter2 = invoices.filter(i => i.items.includes(papper))
console.log(invoiceFilter2)

const result = invoices.some(i => i.client.name === 'juan')
console.log(result)
