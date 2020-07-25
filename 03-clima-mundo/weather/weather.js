const axios = require('axios');
const appKey = 'af5c0c483c19741de96d7475d30fc0e5';

const getWeather = async(lat, lon) => {
    const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${appKey}`
    });

    const response = await instance.get();
    const responseResults = response.data;
    if (responseResults.main == null) {
        throw new Error('No weather data');
    }
    let temperature = responseResults.main.temp;

    return temperature;
};

module.exports = {
    getWeather
};