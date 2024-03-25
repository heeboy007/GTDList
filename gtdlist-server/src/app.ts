import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

const app: Express = express();

app.use(bodyParser.json());
app.use(cookieParser());

async function configureServer(app: Express){
    try {
        //await sequelize.sync();
        Log.L('DB Ready');
    } catch (error) {
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