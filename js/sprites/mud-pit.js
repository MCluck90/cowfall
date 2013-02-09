(function(Sprites) {

    Sprites.MudPit = { "open": [ [], [], [], [], [], [], [], [] ] };
    var width = 100,
        mudPit = Sprites.MudPit;

    for (var i = 0; i < width; i++) {
        var brownPixel = [15, 0],
            clearPixel = null;

        if (i >= 30 && i < width - 30) {
            mudPit.open[0].push(brownPixel);
            mudPit.open[7].push(brownPixel);
        } else {
            mudPit.open[0].push(clearPixel);
            mudPit.open[7].push(clearPixel);
        }

        if (i >= 15 && i < width - 15) {
            mudPit.open[1].push(brownPixel);
            mudPit.open[6].push(brownPixel);
        } else {
            mudPit.open[1].push(clearPixel);
            mudPit.open[6].push(clearPixel);
        }

        if (i >= 5 && i < width - 5) {
            mudPit.open[2].push(brownPixel);
            mudPit.open[5].push(brownPixel);
        } else {
            mudPit.open[2].push(clearPixel);
            mudPit.open[5].push(clearPixel);
        }

        mudPit.open[3].push(brownPixel);
        mudPit.open[4].push(brownPixel);
    }

})(Sprites);