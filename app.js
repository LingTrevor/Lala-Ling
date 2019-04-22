const express = require('express');
const bodyParser = require('body-parser');
const { port } = require('./server/config');
const todoRoutes = require('./server/Routes/todoRoutes');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/api/',todoRoutes);

app.listen(port, () => {
    console.log(`Started on port: ${port}`);
});