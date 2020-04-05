// const request = require('request');
// request('http://www.google.com', function (error, response, body) {
//   console.error('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });

var request = require('request');
// request('http://www.google.com', function(error, response, body){
// request('http://www.google.notanurl', function(error, response, body){
// request('http://www.google.com/000', function(error, response, body){
// Weather API: http://api.weatherstack.com
request ('http://api.weatherstack.com/current?access_key=0402f1fc062ef527e173b0267f15c67e&query=New%20York', function(error, response, body) {
    if (error) {
        console.log('ERROR!!!!');
    } else {
        if (response.statusCode == 200) {
            console.log(response.body);
            console.log('Worked 200 OK!');
        } else {
            console.log(response.statusCode);
            
        }
    }
});