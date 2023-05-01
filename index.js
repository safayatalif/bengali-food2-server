const express = require('express');
var cors = require('cors')
const app = express();
const port = 5000;

app.use(cors())

const chefs= require('./data/chefs.json')

app.get('/', (req, res) => {
    res.send('Bengali Food is running')
});

app.get('/chefs', (req, res) => {
    res.send(chefs)
})

app.listen(port, () => {
    console.log(`bengali food api is running on port : ${port}`)
})