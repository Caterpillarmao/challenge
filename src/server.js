'use strict';
const express = require('express');
const app = express();
const registerRoutes = require('./routes');
const cors = require('cors');

// server config
const port = process.env.PORT || 3000;

// register routes
registerRoutes(app);
app.use(express.static('public'));
app.use(cors({
    credentials: true, 
    origin: 'http://localhost:3000'
}));
// create server start method
const start = () => {
    return new Promise((resolve, reject) => {
        // start the server
        app.listen(port, () => {
            console.log(`Connected to Port ${port}`);
            resolve()
        });
    }).catch((error) => {
        console.log(`failed to start server => ${error.message}`)
    });
}

module.exports = start;


