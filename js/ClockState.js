// clock state definition
// this state is loaded by game
var ClockState = function() {
};

// ClockState.prototype should have atleast one of the preload, create, update functions

ClockState.prototype = (function() {
    var state = this;
    var clock, hoursHand, minutesHand, secondsHand, pendulum;
    var timeText = now = moment(), dateText;

    var preload = function() {

    };

    var create = function() {
        // game one time execution logic should be here
        game.stage.backgroundColor = 0xffffff;

        swapImages();

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

        clock = game.add.sprite(centerX, centerY, 'clock');
        clock.anchor.set(0.5);
        clock.scale.set(0.4);

        // showing weather data
        textRef();

        timeText = textBox(centerX, centerY - 60, 'some text');
        dateText = textBox(centerX, centerY + 60, 'sdklfj');
        dateText.setText(now.format('Do MMM, YYYY'));

        setInterval(function() {
            now = moment();
            timeText.setText(now.format('hh:mm:ss'));
            secondsHand.angle += 6;

            if(now.seconds() === 0) {
                minutesHand.angle += 6;
                hoursHand.angle += 0.5;

                dateText.setText(now.format('Do MMM, YYYY'));
            }
        }, 1000);

        game.forceSingleUpdate = true;
        game.renderer.renderSession.roundPixels = true;
    };

    function setClockHands() {
        var d = 6;
        secondsHand.angle = d * now.seconds();
        minutesHand.angle = d * now.minutes();
        hoursHand.angle = (360/720) * ((parseInt(now.format('h')) * 60) + now.minutes());
    }

    return {
        preload: preload,
        create: create
    };
})();
