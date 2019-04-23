const express = require('express');
const bodyParser = require('body-parser');
const { port } = require('./server/config');
const todoRoutes = require('./server/Routes/todoRoutes');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

app.use('/api/',todoRoutes);

if (process.env.NODE_ENV === 'production') {
    //Static folder
    app.use(express.static(__dirname + '/server/client/public'));

    //Handle SPA
    app.get(/.*/, (req, res) => {
        res.sendFile(__dirname + '/server/client/public/index.html');
    })
}

app.listen(port, () => {
    console.log(`Started on port: ${port}`);
});