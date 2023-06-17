const utils = require('../Utils/utils');
const mqtt = require('mqtt');

var client = new mqtt.connect('mqtt://localhost:1883');

client.on('connect', async function () {
    console.log('Conexão com publisher arduino estabelecida');

    sendTemperature()
    await utils.delay(1500);
    sendSoilMoisture()
});

function sendTemperature() {
    setInterval(function () {
        var temperature = utils.generateRandomNumber(5, 40);
        client.publish('temperature', temperature.toString());
    }, 3000);
}

function sendSoilMoisture() {
    setInterval(function () {
        var soilMoisture = utils.generateRandomNumber(0, 100);
        client.publish('soilMoisture', soilMoisture.toString());
    }, 3000);
}