// Setting the "express" package:
var express = require('express');
var app = express();
// View Engine:
app.set('view engine', 'ejs');
// Tell Express to listen for requests (start server):
app.listen(3000, function() {
    console.log('Serving web app on port 3000...');
});

// Route requests:
app.get('/', function(rew, res) {
    res.render('home');
});

app.get('/friends', function(req, res) {
    var friends = ['Jon', 'Lyanna', 'Harry', 'Hermione', 'Lara', 'Ron']
    res.render('friends', {friendsWebpage: friends});
});

app.get('/addfriend', function(req, res) {
    res.send('You should be doing a POST request here...');
});
app.post('/addfriend', function(req, res) {
    res.send('Post route!');
});