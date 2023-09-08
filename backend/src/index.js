const express = require('express');
const sequelize = require('../config/db');
const User = require('../src/models/user');
const Product = require('../src/models/product');
const Order = require('../src/models/order')
const Cart = require('../src/models/cart')

require('dotenv').config();

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});


(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error(`Unable to connect to the database ${error}`);
    }
})();

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
})