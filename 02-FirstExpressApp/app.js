// console.log('Our Express app will go here!');
var express = require('express');
var app = express();

// Listening in "/" => "Hi there!"
app.get('/', function(req, res) {
    res.send('Hi there!');
});

// Listening in "/bye" => "Good bye!"
app.get('/bye', function(req, res) {
    res.send('Good bye!');
    console.log('Someone made a request to /bye...'); // Try this request in Postman, and watch how it gets written in the node console (inside VSCode).
    
});

// Listening in "/dog" => "Meow!!!"
app.post('/dog', function(req, res) {
    res.send('Meow!!!');
});

// This is a route variable (using colon ":")
app.get('/sub/:subPage', function(req, res) {
    res.send('Welcome to your own sub-web page: ' + req.url);
    console.log('Someone made a request to: ' + req.url);
    console.log('The parameters are: ' + req.params);
    console.log('The variable subPage = ' + req.params.subPage);
});
app.get('/sub/:subPage/:anotherSubPage', function(req, res) {
    res.send('Welcome to your own sub-sub-web page! It\'s a rabbit\'s hole!');
});

// Listening in any other route. This needs to be after all other routes.
app.get('*', function(req, res) {
    res.send('Whoops! You are in the wrong place...');
});

// Tell Express to listen for requests (start server).
app.listen(3000, function() {
    console.log('Serving web app on port 3000...');
    
});