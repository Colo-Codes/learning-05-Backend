const express = require('express');
const app = express();
const request = require('request');
// View Engine:
app.set('view engine', 'ejs');

// Routes:
app.get('/', (req, res) => {
    res.render('search');
});

app.get('/results', (req, res) => {
    const movieSearchForAPI = req.query.movieSearch;
    const urlForAPI = 'http://www.omdbapi.com/?s=' + movieSearchForAPI + '&apikey=thewdb';
    request (urlForAPI, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            const bodyObject = JSON.parse(body);
            console.log(`This is the result: ${bodyObject.Title}`);
            // res.send(bodyObject);
            res.render('results', {bodyObjectHTML: bodyObject});
        } else {
            console.log(`Something went wrong! ${response.statusCode}`);
        }
    });
});





// Tell Express to listen for requests (start server):
app.listen(3000, () => {
    console.log('Serving web app on port 3000...');
});