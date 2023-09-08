const { DataTypes, DATE, Model } = require('sequelize');
const sequelize = require('../../config/db');
const User = require('./user');
const Product = require('./product');

const Order = sequelize.define('orders', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    },
    totalPrice: {
        type: DataTypes.INTEGER,
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'), 
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
    },
});

Order.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});
Order.belongsTo(Product, {
    foreignKey: 'productId',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});

Order.sync({ alter: true }).then(() => {
    console.log('Order table created successfully!');
}).catch((error) => {
    console.error(`An error occurred! ${error}`);
});

module.exports=Order;