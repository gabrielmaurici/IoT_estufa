function checkTemperatureAndTurnOnOffRefrigerator(temperature, refrigeratorOn, refrigeratorMaximumPower) {

    var log = `Temperatura: ${temperature}°C`

    if (temperature >= 30 && !refrigeratorOn) {
        // Aqui teria um serviço para ligar o refrigerado e outro para enviar notificação via WhatsApp
        refrigeratorOn = true;
        refrigeratorMaximumPower = true
        log = `Temperatura: ${temperature}°C - LIGANDO REFRIGERAÇÃO POTÊNCIA MÁXIMA`;
    }

    if ((temperature >= 16 && temperature <= 29) && (refrigeratorOn && refrigeratorMaximumPower)) {
        // Aqui teria um serviço para ajustar o refrigerador para potência média e outro para enviar notificação via WhatsApp
        refrigeratorOn = true;
        refrigeratorMaximumPower = false;
        log = `Temperatura: ${temperature}°C - ALTERANDO REFRIGERAÇÃO POTÊNCIA MÉDIA`;
    }

    if (temperature <= 15 && refrigeratorOn) {
        // Aqui teria um serviço para desligar o refrigerador e outro para enviar notificação via WhatsApp
        refrigeratorOn = false;
        refrigeratorMaximumPower = false;
        log = `Temperatura: ${temperature}°C - DESLIGANDO REFRIGERAÇÃO`;
    }

    console.log(log);

    return { 
        refrigeratorOn: refrigeratorOn,
        refrigeratorMaximumPower: refrigeratorMaximumPower
    };
}

module.exports = {
    checkTemperatureAndTurnOnOffRefrigerator
}