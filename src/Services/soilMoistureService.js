function checkSoilMoistureAndTurnOnOffIrrigator(soilMoisture, irrigatorOn) {

    var log = `Umidade do solo: ${soilMoisture}%`

    if (soilMoisture < 30 && !irrigatorOn) {
        // Aqui teria um serviço para ligar o irrigador e outro para enviar notificação via WhatsApp
        irrigatorOn = true;
        log = `Umidade do solo: ${soilMoisture}% - LIGANDO IRRIGAÇÃO`;
    }

    if (soilMoisture >= 70 && irrigatorOn) {
        // Aqui teria um serviço para desligar o irrigador e outro para enviar notificação via WhatsApp
        irrigatorOn = false;
        log = `Umidade do solo: ${soilMoisture}% - DESLIGANDO IRRIGAÇÃO`;
    }

    console.log(log);

    return irrigatorOn;
}

module.exports = {
    checkSoilMoistureAndTurnOnOffIrrigator
}