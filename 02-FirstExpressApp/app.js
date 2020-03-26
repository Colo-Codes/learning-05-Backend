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


// Tell Express to listen for requests (start server)
app.listen(3000, function() {
    console.log('Serving web app on port 3000...');
    
});