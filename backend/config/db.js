const User = require('../src/models/user');
const Product = require('../src/models/product');
const Order = require('../src/models/order');
const Cart = require('../src/models/cart');

const synchronozeModels = async () => {
    try {
        await User.sync();
        await Product.sync();
        await Order.sync();
        await Cart.sync();

        console.log('Database synchronized');
    } catch (error) {
        console.error(`Error Synchronizing database ${error}`);
    }
}

module.exports = synchronozeModels;