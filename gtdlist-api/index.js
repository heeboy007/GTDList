require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const { sequelize } = require('./databaase');
const user = require('./controller/user.controller');

const { PORT } = process.env;

async function launchServer(){
    const app = express();
    const port = PORT || 8000;

    app.use(bodyParser.json());

    app.get('/', (req, res) => {
        res.json({ message: 'Hello CoronaBoard!' });
    });

    app.get('/user', user.getAll);
    app.post('/user/register', user.register);
    app.post('/user/login', user.login);
    app.post('/user', user.update);
    app.delete('/user', user.remove);

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
    });
}

launchServer();