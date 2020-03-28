// Setting the "express" package:
var express = require('express');
var app = express();
// Tell Express to listen for requests (start server):
app.listen(3000, function() {
    console.log('Serving web app on port 3000...');
});
// Use "public" as another directory to serve:
app.use(express.static('public'));
// Use "ejs" as view engine (so you don't have to write ".ejs" for file extensions):
app.set('view engine', 'ejs');

// (!) Express will automatically look for "ejs" templates in the "views" directory.

// Start of requests ########################################################################
app.get('/', function(req, res) {
    // res.send('<h1>Welcome to the home page!</h1><h2>Sub-heading...</h2>');
    // res.render('home.ejs'); // Without defining the view engine.
    res.render('home'); // Defining the view engine.
});

app.get('/fallinlovewith/:thing', function(req, res) {
    var thing = req.params.thing;
    // res.render('love.ejs', { thingVariable: thing}); // Passing a variable to the "ejs" file. // Without defining the view engine.
    res.render('love', { thingVariable: thing}); // Passing a variable to the "ejs" file. // Defining the view engine.
});

app.get('/posts', function(req, res) {
    var posts = [
        {title: 'Post 1', author: 'Susy'},
        {title: 'Post 2', author: 'Daniel'},
        {title: 'Post 3', author: 'Mike'}
    ];
    // res.render('posts.ejs', { postsTemplate: posts }); // Without defining the view engine.
    res.render('posts', { postsTemplate: posts }); // Defining the view engine.
});
// End of requests ########################################################################