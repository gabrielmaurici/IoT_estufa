const temperatureService = require('../temperatureService')
const soilMoistureService = require('../soilMoistureService')
const mqtt = require('mqtt');

var client = new mqtt.connect('mqtt://localhost:1883');

var temperatureInfos = {
    refrigeratorOn: false,
    refrigeratorMaximumPower: false
}

var irrigationOn = false;

client.on('connect', function () {

    console.log('Conexão com subscriber node estabelecida');

    client.subscribe('temperature');
    client.subscribe('soilMoisture');
});

client.on('message', function (topic, message) {

    if (topic.toString() === 'temperature') {
        var temperature = message.toString();
        temperatureInfos = temperatureService.checkTemperatureAndTurnOnOffRefrigerator(temperature, temperatureInfos.refrigeratorOn, temperatureInfos.refrigeratorMaximumPower)
    } 

    if (topic.toString() === 'soilMoisture') {
        var soilMoisture = message.toString();
        irrigationOn = soilMoistureService.checkSoilMoistureAndTurnOnOffIrrigator(soilMoisture, irrigationOn);
    };
});