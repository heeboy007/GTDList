import express from 'express';
import bodyParser from 'body-parser';

import { sequelize } from './database/index.js';
import User from './controller/user.controller.js';

const app = express();
app.use(bodyParser.json());

async function configureServer(app){
    try {
        await sequelize.sync();
        console.log('API : DB Ready');
    } catch (error) {
        console.log('API : Unable to connect with database');
        console.log(error);
        process.exit(1);
    }

    app.get('/', (req, res) => {
        res.json({ message: 'API server is online' });
    });

    app.get('/user', User.getAll);
    app.post('/user/register', User.register);
    app.post('/user/login', User.login);
    app.post('/user', User.update);
    app.delete('/user', User.remove);

    console.log('API : Connected controllers to express');
}

await configureServer(app);

export default app;