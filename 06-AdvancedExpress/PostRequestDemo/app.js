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
    res.render('friends');
});