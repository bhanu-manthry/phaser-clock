function textRef() {
    var tempText = game.add.text(centerX + 80, 30, 'time', {
        // font: '20px Arial',
        // fill: 'red',
        fontWeight: 'bold',
        align: 'center'
    });

    // tempText.anchor.set(0.5);
    // tempText.setShadow(1, 1, 'rgba(0, 0, 0, 0.5)', 1);
    // tempText.addColor('#ff00fe', 2);
    // tempText.addColor('#3F51B5', 7);
    // tempText.addColor('#3F51B5', 8);
    // tempText.addColor('#4E342E', 10);

    $.get('http://api.openweathermap.org/data/2.5/weather?q=Hyderabad,in&units=metric&appid=d97922415f1fc5acbb53332be3df3226', function(res) {
        tempText.text = 'Temperature: ' + res.main.temp + '° C'
    });
}
