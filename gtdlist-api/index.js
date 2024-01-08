require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./databaase');

const { PORT } = process.env;

async function launchServer(){
    const app = express();
    const port = PORT || 8000;

    app.use(bodyParser.json());

    app.get('/', (req, res) => {
        res.json({ message: 'Hello CoronaBoard!' });
    });

    try {
        await sequelize.sync();
        console.log('API : DB Ready');
    } catch (error) {
        console.log('API : Unable to connect with database');
        console.log(error);
        process.exit(1);
    }

    app.listen(port, () => {
        console.log(`API : Experess server ready on port ${port}`);
    })
}

launchServer();