// Setting the "express" package:
var express = require('express');
var app = express();
// Body Parser:
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
// View Engine:
app.set('view engine', 'ejs');
// Tell Express to listen for requests (start server):
app.listen(3000, function() {
    console.log('Serving web app on port 3000...');
});

// Making the array blobally visible to all routes:
var friends = ['Jon', 'Lyanna', 'Harry', 'Hermione', 'Lara', 'Ron'];

// Route requests:
app.get('/', function(rew, res) {
    res.render('home');
});

app.get('/friends', function(req, res) {
    res.render('friends', {friendsWebpage: friends});
});

app.get('/addfriend', function(req, res) {
    res.send('You should be doing a POST request here...');
    console.log('GET');
});
app.post('/addfriend', function(req, res) {
    //console.log(req.body.newFriend); // Works with Body Parser
    var newFriendPosted = req.body.newFriend;
    friends.push(newFriendPosted);
    console.log('POST');
    // res.send('Post route! - <a href="/friends">Go back to /friends</a>');
    res.redirect('/friends');
});