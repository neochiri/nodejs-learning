'use strict';

const address = {
    alias: 'd',
    desc: 'City to obtain the weather from',
    demand: true
};

const argv = require('yargs').options({
    address
}).argv;

module.exports = {
    argv
};