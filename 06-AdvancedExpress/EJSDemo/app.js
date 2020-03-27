// Setting the "express" package:
var express = require('express');
var app = express();
// Tell Express to listen for requests (start server):
app.listen(3000, function() {
    console.log('Serving web app on port 3000...');
});

// (!) Express will automatically look for "ejs" templates in the "views" directory.

// Requests
app.get('/', function(req, res) {
    // res.send('<h1>Welcome to the home page!</h1><h2>Sub-heading...</h2>');
    res.render('home.ejs');
});

app.get('/fallinlovewith/:thing', function(req, res) {
    var thing = req.params.thing;
    res.render('love.ejs', { thingVariable: thing}); // Passing a variable to the "ejs" file.
});

app.get('/posts', function(req, res) {
    var posts = [
        {title: 'Post 1', author: 'Susy'},
        {title: 'Post 2', author: 'Daniel'},
        {title: 'Post 3', author: 'Mike'}
    ];
    res.render('posts.ejs', { postsTemplate: posts });
});