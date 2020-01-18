const express = require ('express');
const bodyParser = require('body-parser');
const connectDB = require ('/config.js');

const mongoose = require('mongoose');
const path = require ('path');

const app = express();

mongoose.connect(`mongodb+srv://Abby:${connectDB}/test?retryWrites=true&w=majority`, {
    useUnifiedTopology:true,
    useNewUrlParser:true,
}).then (()=> {
    console.log('Successfully connected to MongoDB Atlas');
}).catch((error) => {
    console.log('Unable to connect to MongoDB Atlas');
    console.error(error);
});

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());
app.use(express.static('public'));

module.exports = app;  