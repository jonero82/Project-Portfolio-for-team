const { Sequelize } = require('sequelize');
require('dotenv').config();

const userName = process.env.MYSQL_USER || 'localhost';
const password = process.env.MYSQL_PASSWORD || 'password';
const database = process.env.MYSQL_DB || 'project';
const host = process.env.MYSQL_HOST || 'localhost';

const sequelize = new Sequelize(database, userName, password, {
    host: host,
    dialect: 'mysql',
});

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error(`Unable to connect to the database ${error}`);
    }
})();

module.exports = sequelize;