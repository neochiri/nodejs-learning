const axios = require('axios');
const appKey = 'af5c0c483c19741de96d7475d30fc0e5';

const getPlaceLatLon = async(address) => {
    const encodedUrl = encodeURI(address);
    const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?q=${encodedUrl}&appid=${appKey}`
    });

    const response = await instance.get();
    const responseResults = response.data;
    if (responseResults.coord == null) {
        throw new Error(`No data for ${address}`);
    }
    let lat = responseResults.coord.lat;
    let lon = responseResults.coord.lon;
    let addressResult = responseResults.name;

    return {
        addressResult,
        lat,
        lon
    };
};

module.exports = {
    getPlaceLatLon
};