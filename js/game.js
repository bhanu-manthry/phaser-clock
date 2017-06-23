var game = new Phaser.Game(700,700, Phaser.AUTO, 'mycanvas', {
    preload: preload,
    create: create,
    update: update
});

var centerX, centerY;
var clock, hoursHand, minutesHand, secondsHand, pendulum;
var timeText = now = moment();

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
    // game one time execution logic should be here
    game.stage.backgroundColor = 0xffffff;

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

    // create graphics object
    var g1 = game.add.graphics(0,0);

    // create a circle in g1 object
    g1.beginFill(0xFFE0B2, 1)
    g1.drawCircle(centerX, centerY, 370);
    g1.endFill();

    hoursHand = game.add.sprite(centerX, centerY, 'hoursHand');
    hoursHand.anchor.set(0.5);
    hoursHand.scale.set(0.3);

    minutesHand = game.add.sprite(centerX, centerY, 'minutesHand'),
    minutesHand.anchor.set(0.5);
    minutesHand.scale.set(0.45);

    secondsHand = game.add.sprite(centerX, centerY, 'secondsHand');
    secondsHand.anchor.set(0.5);

    setClockHands();

    var secondsHandTween = game.add.tween(secondsHand);
    secondsHandTween.to({angle: 360}, 1000 * 60, null, true, 0, -1, false);

    var minutesHandTween = game.add.tween(minutesHand);
    minutesHandTween.to({angle: 360}, 1000 * 60 * 60, null, true, 0, -1, false);

    var hoursHandTween = game.add.tween(hoursHand);
    hoursHandTween.to({angle: 360}, 1000 * 60 * 60 * 12, null, true, 0, -1, false);

    clock = game.add.sprite(centerX, centerY, 'clock');
    clock.anchor.set(0.5);
    clock.scale.set(0.4);

    // timeText = textRef();
    // // bring text to top
    // game.world.bringToTop(timeText);

    setInterval(function() {
        now = moment();
        timeText.text = now.format('hh:mm:ss');
    }, 1000);
}

function update() {
    // this function is in an infinite loop internally
    // minutesHand.angle += 0.5;
}

function setClockHands() {
    var d = 6;
    secondsHand.angle = d * now.seconds();
    minutesHand.angle = d * now.minutes();
    hoursHand.angle = (360/12) * now.hours();
    console.log('came here');
}
