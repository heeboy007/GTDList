import dotenv from 'dotenv';
import app from './app.js';

dotenv.config();

const { PORT } = process.env;
const port = PORT || 8000;

app.listen(port, () => {
    console.log(`API : Experess server ready on port ${port}`);
});