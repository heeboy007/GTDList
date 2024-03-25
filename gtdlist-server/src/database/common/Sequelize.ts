import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

dotenv.config();

const { DB_URL, DB_USER, GTD_DB_PASSWORD } = process.env;

const config = {
    host: DB_URL || 'localhost',
    port: 3306,
    database: 'gtdlist',
    user: DB_USER || 'gtdlist_admin',
    password: GTD_DB_PASSWORD
}

const sequelize = new Sequelize(config.database, config.user, config.password, {
    host: config.host,
    dialect: 'mysql'
});

export default sequelize;