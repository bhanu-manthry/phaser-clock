var game = new Phaser.Game(700,700, Phaser.AUTO, 'mycanvas', {
    preload: preload,
    create: create,
    update: update
});

var centerX, centerY;
var clock, hoursHand, minutesHand, secondsHand, pendulum;
var timeText = now = null;

function preload() {
    // all the required assets should be loaded here
    game.load.spritesheet('earth', 'img/earth.png', 100, 100);
    game.load.image('hoursHand', 'img/hours_hand.png');
    game.load.image('minutesHand', 'img/minutes_hand.png');
    game.load.image('secondsHand', 'img/second_hand.png');
    game.load.image('pendulum', 'img/pendulum.png');
    game.load.image('clock', 'img/clock.png');

    centerX = game.world.centerX;
    centerY = game.world.centerY;
}

function create() {
    game.stage.backgroundColor = 0xffffff;
    // game one time execution logic should be here
    textRef();

    // create a new sprite and store in pendulum var
    pendulum = game.add.sprite(centerX, centerY, 'pendulum');
    // scale image
    // sprite.scale.set(x, y)
    // x, y values ranges from 0 to 1
    pendulum.scale.set(0.4);

    // set the anchor position (by default it is on top left corner)
    pendulum.anchor.set(0.5, 0);

    // angle from -180 to 180
    pendulum.angle = 15;

    // create a new tween
    var oscillation = game.add.tween(pendulum);

    // to(properties, duration, ease, autoStart, delay, repeat, yoyo)
    oscillation.to({angle: -15}, 1000, null, true, 0, -1, true);
    oscillation.start();

    var g1 = game.add.graphics(0,0);
    g1.beginFill(0xFFE0B2, 1)
    g1.drawCircle(centerX, centerY, 350);
    g1.endFill();

    secondsHand = game.add.sprite(centerX, centerY, 'secondsHand');
    secondsHand.anchor.set(0.5);
    secondsHand.scale.set(0.48);

    minutesHand = game.add.sprite(centerX, centerY, 'minutesHand'),
    minutesHand.anchor.set(0.5);
    minutesHand.scale.set(0.48);

    hoursHand = game.add.sprite(centerX, centerY, 'hoursHand');
    hoursHand.anchor.set(0.5);
    hoursHand.scale.set(0.8);

    clock = game.add.sprite(centerX, centerY, 'clock');
    clock.anchor.set(0.5);
    clock.scale.set(0.7);

    setInterval(function() {
        now = moment().format('hh:mm:ss');
        timeText.text = now;
        secondsHand.rotation += 0.0872665;
    }, 1000);
}

function update() {
    // this function is in an infinite loop internally
    // minutesHand.angle += 0.5;
}

function textRef() {
    timeText = game.add.text(centerX, 100, 'time', {
        font: '40px Arial',
        fill: 'red',
        align: 'center'
    });

    timeText.anchor.set(0.5);
    timeText.setShadow(2, 2, 'rgba(0, 0, 0, 0.5)', 4);
    timeText.addColor('#ff00fe', 2);
    timeText.addColor('#3F51B5', 7);
    timeText.addColor('#3F51B5', 8);
    timeText.addColor('#4E342E', 10);
}

function setClockHands() {

}
