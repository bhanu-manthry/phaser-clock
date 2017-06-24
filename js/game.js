var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, 'mycanvas', {
    preload: preload,
    create: create,
    update: update
});

// all these variables are used across all javascript files;
var centerX, centerY, weather;

function preload() {
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    // all the required assets should be loaded here
    game.load.spritesheet('earth', 'img/earth.png', 100, 100);
    game.load.image('hoursHand', 'img/hours_hand.png');
    game.load.image('minutesHand', 'img/minutes_hand.png');
    game.load.image('secondsHand', 'img/second_hand.png');
    game.load.image('pendulum', 'img/pendulum.png');
    game.load.image('clock', 'img/clock.png');
    game.load.image('sunnyWeather', 'img/sunny-weather.jpg');
    game.load.image('thunderstrom', 'img/thunderstrom.jpg');
    game.load.image('scatteredClouds', 'img/scattered_clouds.png');

    centerX = game.world.centerX;
    centerY = game.world.centerY;

    game.state.add('ClockState', ClockState);
}

function create() {
    $.get('http://api.openweathermap.org/data/2.5/weather?q=Hyderabad,in&units=metric&appid=d97922415f1fc5acbb53332be3df3226', function(res) {
        weather = res;
        game.state.start('ClockState');
    });
}

function update() {
    // this function is in an infinite loop internally
    // minutesHand.angle += 0.5;
}
