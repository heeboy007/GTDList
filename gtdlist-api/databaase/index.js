require('dotenv').config();

const { Sequelize } = require('sequelize');

const { DB_URL, DB_USER, GTD_DB_PASSWORD } = process.env;

const config = {
    host: DB_URL || 'localhost',
    port: 3306,
    database: 'gtdlist',
    user: DB_USER || 'gtdlist_admin',
    password: GTD_DB_PASSWORD
}

console.log(config);

const sequelize = new Sequelize(config.database, config.user, config.password, {
    host: config.host,
    dialect: 'mysql'
});

module.exports = {
    sequelize,
    Task: require('./task.model')(sequelize),
    User: require('./user.model')(sequelize),
}