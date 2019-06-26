const path = require('path');
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.set('debug', true);
mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://Oprah:Oprah@cluster0-chqnf.mongodb.net/test?retryWrites=true&w=majority').then(
    () => {
        console.log('mongoose connected :)');
        startWebServer();
    },
    err => {
        console.log('mongoose did not connect :(', err);
    }
);

const startWebServer = () =>{
    //not secure
    const app = express();

    const port = process.env.PORT || 3002;
    app.listen(port, (err) => {
        if (err) {
            return console.log('ERROR: ', err)
        }
        console.log(`Listening on port: ${port}`)
    });
}