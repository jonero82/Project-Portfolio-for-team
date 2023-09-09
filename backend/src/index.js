const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('../config/config');
const User = require('../src/models/user');
const Product = require('../src/models/product');
const Order = require('../src/models/order')
const Cart = require('../src/models/cart');
const signUp = require('../src/controllers/userController/signUp');
const router = require('../src/routes/api/v1/userRoute/router');
const synchronozeModels = require('../config/db');
require('dotenv').config();
const port = process.env.PORT || 3000;

// CREATE APP
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.use(router, signUp);

synchronozeModels().then(() => {
    app.listen(port, () => {
        console.log(`App is listening on port ${port}`);
    });
}).catch((error) => {
    console.log(`Error synchronizing database ${error}`);
});