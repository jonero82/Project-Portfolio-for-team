const { Sequelize } = require('sequelize');
//const User = require('../src/models/user');
require('dotenv').config();

const userName = process.env.MYSQL_USER || 'localhost';
const password = process.env.MYSQL_PASSWORD || 'password';
const database = process.env.MYSQL_DB || 'project';
const host = process.env.MYSQL_HOST || 'localhost';

const sequelize = new Sequelize(database, userName, password, {
    host: host,
    dialect: 'mysql',
});

module.exports = sequelize;