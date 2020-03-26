// console.log('Our Express app will go here!');

// Ref: Video 270: https://www.udemy.com/course/the-web-developer-bootcamp/learn/lecture/3861604#overview

// Setting the "express" package:
var express = require('express');
var app = express();
// Tell Express to listen for requests (start server):
app.listen(3000, function() {
    console.log('Serving web app on port 3000...');
    
});

// Start of routes #######################################

app.get('/', function(req, res) {
    res.send('Hi there, welcome to my assignment!');
    console.log('Someone requested: ' + req.url);
});

app.get('/speak/:animal', function(req, res) {
    if (req.params.animal === 'pig') {
        res.send('The pig says \'Oink!\'');
        console.log('Someone requested: ' + req.params.animal);
    } else if (req.params.animal === 'cow') {
        res.send('The pig says \'Moo!\'');
        console.log('Someone requested: ' + req.params.animal);
    } else if (req.params.animal === 'dog') {
        res.send('The pig says \'Woof Woof!\'');
        console.log('Someone requested: ' + req.params.animal);
    } else {
        res.send('Animal not found...');
        console.log('Someone requested: ' + req.params.animal);
    }
});

app.get('/repeat/:string/:number', function(req, res) {
    // Converting string to integer:
    var repeatNTimes = parseInt(req.params.number, 10);
    var response = '';
    // Building the response:
    for (var i = 1; i <= repeatNTimes; i++) {
        response += req.params.string + ' ';
    }
    // Printing the response and eliminating the las white space:
    res.send(response.slice(0, -1));
    console.log('REPEAT - The response is: ' + response.slice(0, -1));
});

app.get('*', function(req, res){
    res.send('Sorry, page not found... What are you doing with your life?')
});

// End of routes #########################################