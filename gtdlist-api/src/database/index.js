import dotenv from 'dotenv';
import userModel from './user.model.js';
import taskModel from './task.model.js';
import emailVerfificationTokenModel from './email-verification-token.model.js';

dotenv.config();

import { Sequelize } from 'sequelize';

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

const Task = taskModel(sequelize);
const User = userModel(sequelize);
const EmailVerificationToken = emailVerfificationTokenModel(sequelize);

export { sequelize, Task, User, EmailVerificationToken };