import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import MiddlewareDebugLogger from './logger/middleware/MiddlewareDebugLogger.ts';
import Log from './logger/Log.js';
import sequelize from './database/common/Sequelize.ts';
import { Sequelize } from 'sequelize';
import Sequelizable from './database/interface/Sequelizable.ts';
import TaskDB from './database/implementation/Task.DB.ts';
import EmailDB from './database/implementation/Email.DB.ts';
import UserDB from './database/implementation/User.DB.ts';
import requestIp from 'request-ip';

const app: Express = express();

app.use(requestIp.mw());
app.use(bodyParser.json());
app.use(MiddlewareDebugLogger);

async function syncDB(sequelize: Sequelize) {
    const databases: Sequelizable[] = [
        new TaskDB(),
        new EmailDB(),
        new UserDB()
    ];
    for(const database of databases) {
        database.linkSequelize(sequelize);
    }
}


async function configureServer(app: Express){
    try {
        await syncDB(sequelize);
        Log.L('DB Ready');
    } catch (error: unknown) {
        Log.E('Failed to launch database');
        Log.E(error);
        process.exit(1);
    }

    app.get('/', (_: Request, res: Response) => {
        res.status(204).json({ nocont: 'No Content' });
    });

    //app.use('/user', authRouter);

    Log.L('Connected routers to express.');
}

await configureServer(app);

export default app;