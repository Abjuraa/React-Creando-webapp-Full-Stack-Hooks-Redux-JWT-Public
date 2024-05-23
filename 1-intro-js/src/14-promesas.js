import {findInvoiceById} from './data/invoices';


findInvoiceById(1)
    //.then(result => console.log(result))
    .then(console.log)

    //.catch(err => console.log(err))
    .catch(console.error)