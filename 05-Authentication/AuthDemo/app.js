// Preliminary settings
const express = require('express'),
    mongoose = require('mongoose'),
    passport = require('passport'),
    bodyParser = require('body-parser'),
    LocalStrategy = require('passport-local'),
    passportLocalMongoose = require('passport-local-mongoose');

mongoose.connect('mongodb://localhost/auth_demo_app');

const app = express();

app.set('view engine', 'ejs');

// Routes (start) ++++++++++++++++++++++++++++++
// INDEX route (GET)
app.get('/', (req, res) => {
    res.render('home');
});
// Secret route (not RESTful) (GET)
app.get('/secret', (req, res) => {
    res.render('secret');
});

// Routes (end) ++++++++++++++++++++++++++++++++

// Starting the NodeJS server
app.listen(3000, function() {
    console.log('Serving web app on port 3000...');
});