function textBox(x, y, initialText) {
    var sprite, textObj;

    function _createTextBox() {
        var g = game.add.graphics(x, y);
        g.beginFill(0xffffff, 0.2);

        // lineStyle(thickness, color, alpha)
        g.lineStyle(1, 0x000000, 1);
        g.drawRect(0, 0, textObj.width + 10, textObj.height);

        sprite = game.add.sprite(x, y, g.generateTexture());
        sprite.anchor.set(0.5);

        // destroy graphics
        g.destroy();

        game.world.bringToTop(textObj);
    };

    textObj = game.add.text(x, y, initialText);
    textObj.anchor.set(0.5);

    _createTextBox();

    return {
        setText: function(t) {
            textObj.text = t;
            sprite.destroy();
            _createTextBox();
        }
    };
}
