import dotenv from 'dotenv';
import app from './app.js';

const loaded: dotenv.DotenvConfigOutput = dotenv.config();

if(loaded.parsed) {
    const { PORT } = loaded.parsed;
    const port = PORT || 8000;

    app.listen(port, () => {
        Log.L(`API : Experess server ready on port ${port}`);
    });
} else {
    Log.E("Loading DotEnv config failed, shutting down server immediatly.");
}

