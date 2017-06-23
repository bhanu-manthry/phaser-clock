// clock state definition
// this state is loaded by game
var ClockState = function() {

};

// ClockState.prototype should have atleast one of the preload, create, update functions

ClockState.prototype = (function() {
    var state = this;

    var create = function() {
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

        timeText = textRef();
        // bring text to top
        game.world.bringToTop(timeText);

        var tempText = textBox(centerX, 10, 'hello');


        setInterval(function() {
            now = moment();
            timeText.text = now.format('hh:mm:ss');
        }, 1000);

        $.get('http://api.openweathermap.org/data/2.5/weather?q=Hyderabad,in&units=metric&appid=d97922415f1fc5acbb53332be3df3226', function(res) {
            tempText.text = res.main.temp;
        });
    };

    return {
        create: create
    };
})();
