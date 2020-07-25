const argv = require('./config/args').argv;
const place = require('./place/place');
const weather = require('./weather/weather');

const getInfo = async(address) => {
    try {
        const coords = await place.getPlaceLatLon(address);
        const weatherResult = await weather.getWeather(coords.lat, coords.lon);
        return `The temperature in ${coords.addressResult} is ${weatherResult} `
    } catch (error) {
        return `No temperature from ${address} could be obtained`;
    }
};

getInfo(argv.address)
    .then(response => {
        console.log(response);
    }).catch(error => {
        console.log(error);
    });