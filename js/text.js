function textRef() {
    var timeText = game.add.text(centerX, centerY + 70, 'time', {
        font: '20px Arial',
        fill: 'red',
        fontWeight: 'bold',
        align: 'center'
    });

    timeText.anchor.set(0.5);
    timeText.setShadow(1, 1, 'rgba(0, 0, 0, 0.5)', 1);
    timeText.addColor('#ff00fe', 2);
    timeText.addColor('#3F51B5', 7);
    timeText.addColor('#3F51B5', 8);
    timeText.addColor('#4E342E', 10);
    return timeText
}
