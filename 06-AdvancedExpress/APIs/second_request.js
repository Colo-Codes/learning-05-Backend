var request = require('request');

request ('http://api.weatherstack.com/current?access_key=0402f1fc062ef527e173b0267f15c67e&query=New%20York', function(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log('***** This is the tipe of response to the API request: *****');
        console.log(typeof body); // This will show that the 'body' is a string, in spite of looking like a JS object.
        // Parsing the JSON response to the API's request:
        var bodyObject = JSON.parse(body);
        console.log('***** This is the JS object: *****');
        console.log(bodyObject);
        console.log('***** This is the name of the city: *****');
        console.log(bodyObject['request']['query']);
        console.log('***** This is how the weather is like: *****');
        console.log(bodyObject['current']['weather_descriptions'][0]);
        console.log('***** Custom message: *****');
        console.log('It is doing ' + bodyObject['current']['temperature'] + ' degrees in the city of ' + bodyObject['location']['name']);
        
    } else {
        console.log('Something went wrong! ' + response.statusCode);
    }
});