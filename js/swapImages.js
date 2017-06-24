function swapImages() {
    var weatherBackground = game.add.sprite(0, 0, 'sunnyWeather');
    var weatherStatus = game.add.sprite(10, 10, 'scatteredClouds');

    if(weather.main.temp >= 18 && weather.main.temp <= 22) {
        sprite.loadTexture('thunderstrom', 0);
    } else if(weather.main.temp >= 18 && weather.main.temp <= 22) {
        sprite.loadTexture('thunderstrom', 0);
    } else if(weather.main.temp >= 18 && weather.main.temp <= 22) {
        sprite.loadTexture('thunderstrom', 0);
    } else if(weather.main.temp >= 18 && weather.main.temp <= 22) {
        sprite.loadTexture('thunderstrom', 0);
    } else if(weather.main.temp >= 18 && weather.main.temp <= 22) {
        sprite.loadTexture('thunderstrom', 0);
    }

    switch(weather.weather.description) {
        case 'scattered clouds':
            weatherStatus.loadTexture('scatteredClouds', 0);
            break;
    }
}
