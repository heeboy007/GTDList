import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import jwtMiddleware from './util/jwtMiddleware.js';

import { sequelize } from './database/index.js';
import authRouter from './api/auth/index.js';

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());
app.use(jwtMiddleware);

async function configureServer(app){
    try {
        await sequelize.sync();
        console.log('DB Ready');
    } catch (error) {
        console.log('Unable to connect with database');
        console.log(error);
        process.exit(1);
    }

    app.get('/', (req, res) => {
        res.status(204).json({ nocont: 'No Content' });
    });

    app.use('/user', authRouter);

    console.log('Connected routers to express.');
}

await configureServer(app);

export default app;