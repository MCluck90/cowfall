(function(Sprites) {

    var width = 100;

    Sprites.WaterPit = { "open": [ [], [], [], [], [], [], [], [] ] };

    for (var i = 0; i < width; i++) {
        var bluePixel = [9, 1],
            clearPixel = null;

        if (i >= 30 && i < width - 30) {
            Sprites.WaterPit.open[0].push(bluePixel);
            Sprites.WaterPit.open[7].push(bluePixel);
        } else {
            Sprites.WaterPit.open[0].push(clearPixel);
            Sprites.WaterPit.open[7].push(clearPixel);
        }

        if (i >= 15 && i < width - 15) {
            Sprites.WaterPit.open[1].push(bluePixel);
            Sprites.WaterPit.open[6].push(bluePixel);
        } else {
            Sprites.WaterPit.open[1].push(clearPixel);
            Sprites.WaterPit.open[6].push(clearPixel);
        }

        if (i >= 5 && i < width - 5) {
            Sprites.WaterPit.open[2].push(bluePixel);
            Sprites.WaterPit.open[5].push(bluePixel);
        } else {
            Sprites.WaterPit.open[2].push(clearPixel);
            Sprites.WaterPit.open[5].push(clearPixel);
        }

        Sprites.WaterPit.open[3].push(bluePixel);
        Sprites.WaterPit.open[4].push(bluePixel);
    }

})(Sprites);