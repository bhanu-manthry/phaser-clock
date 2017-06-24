var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, 'mycanvas', {
    preload: preload,
    create: create,
    update: update
});

var centerX, centerY;
var clock, hoursHand, minutesHand, secondsHand, pendulum;
var timeText = now = moment();

function preload() {
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    // all the required assets should be loaded here
    game.load.spritesheet('earth', 'img/earth.png', 100, 100);
    game.load.image('hoursHand', 'img/hours_hand.png');
    game.load.image('minutesHand', 'img/minutes_hand.png');
    game.load.image('secondsHand', 'img/second_hand.png');
    game.load.image('pendulum', 'img/pendulum.png');
    game.load.image('clock', 'img/clock.png');

    centerX = game.world.centerX;
    centerY = game.world.centerY;

    game.state.add('ClockState', ClockState);
}

function create() {
    game.state.start('ClockState');
}

function update() {
    // this function is in an infinite loop internally
    // minutesHand.angle += 0.5;
}
