import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import MiddlewareDebugLogger from './application/middleware/MiddlewareDebugLogger.ts';
import Log from './logger/Log.js';

const app: Express = express();

app.use(bodyParser.json());
app.use(MiddlewareDebugLogger);

async function configureServer(app: Express){
    try {
        //await sequelize.sync();
        Log.L('DB Ready');
    } catch (error: unknown) {
        Log.E('Unable to connect with database');
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