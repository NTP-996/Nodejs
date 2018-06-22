const request = require('request');

var getWeather = (lat, lng, callback) => {
    request ({
        url: `https://api.darksky.net/forecast/da4a09e5ad794f76f218478b0d12926a/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        } else {
            callback('Unable to fetch weather.');
        }
    });
}

module.exports.getWeather = getWeather;

