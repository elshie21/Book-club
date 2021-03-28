const express = require ('express');
const mongoose= require ('mongoose');

const bodyParser = require('body-parser')

const app= express();

app.use(bodyParser.json)();

//db config
const db = require('./config/keys').mongoURI;

// connecting to mongo
mongoose
.connect (db)
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log (err));

const port =process.env.PORT || 8000;
app.listen (port, () => console.log('server started on port ${port}'))`;


