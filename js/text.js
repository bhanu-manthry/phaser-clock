function textRef() {
    style = {
        // font: '20px Arial',
        fill: 'white',
        // fontWeight: 'bold',
        // align: 'center'
    };

    // tempText.anchor.set(0.5);
    // tempText.setShadow(1, 1, 'rgba(0, 0, 0, 0.5)', 1);
    // tempText.addColor('#ff00fe', 2);
    // tempText.addColor('#3F51B5', 7);
    // tempText.addColor('#3F51B5', 8);
    // tempText.addColor('#4E342E', 10);

    var tempText = game.add.text(centerX + 80, 30, 'Temperature: ' + weather.main.temp + '° C', style);
    var humidityText = game.add.text(centerX + 80, 70, 'Humidity: ' + weather.main.humidity, style);
    var pressureText = game.add.text(centerX + 80, 110, 'Pressure: ' + weather.main.pressure, style);
    var descText = game.add.text(40, 30, weather.weather[0].description, style);

    setInterval(function() {
        tempText.text = 'Temperature: ' + weather.main.temp + '° C';
        humidityText.text = 'Humidity: ' + weather.main.humidity;
        pressureText.text = 'Pressure: ' + weather.main.pressure;
        descText.text = weather.weather[0].description;
    }, 1000);
}
