var request = require('request');
var pry = require('pryjs');
var locus = require('locus');

request ('http://api.weatherstack.com/current?access_key=0402f1fc062ef527e173b0267f15c67e&query=New%20York', function(error, response, body) {
    // eval(pry.it); // (!) It will not work if you have spaces in your working directory path.
    // eval(locus); // Works like a charm...
    if (!error && response.statusCode == 200) {
        var bodyObject = JSON.parse(body);
        // console.log('It is doing ' + bodyObject['current']['temperature'] + ' degrees in the city of ' + bodyObject['location']['name']);
        console.log('It is doing ' + bodyObject.current.temperature + ' degrees in the city of ' + bodyObject.location.name);
    } else {
        console.log('Something went wrong! ' + response.statusCode);
    }
});