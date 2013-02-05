var Game = (function($, undefined) {

    var

    // The main Game instance
    _game,

    // Color used when clearing the screen
    CLEAR_COLOR = "#222",

    // Properties of the canvas
    CANVAS_WIDTH,
    CANVAS_HEIGHT,
    CANVAS_OFFSET_TOP,
    CANVAS_OFFSET_LEFT,

    // Factor by which to scale each pixel by
    SCALE_FACTOR = 4,

    // Frames per second to run the game at
    FPS = 60,

    // The canvas drawing context
    context,

    // The actual game loop
    gameLoop;

    // Updates all of the objects
    function update() {

    }

    // Draws all of the objects
    function draw() {
        // Clear the screen
        context.fillStyle = CLEAR_COLOR;
        context.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

        var standingSprite = Sprites.WaterPit.open;

        for (var y = 0, rows = standingSprite.length; y < rows; y++) {

            for (var x = 0, columns = standingSprite[y].length; x < columns; x++) {
                var color = standingSprite[y][x];

                if (color === null) {
                    continue;
                }

                context.fillStyle = COLORS[color[0]][color[1]];
                context.fillRect(x * SCALE_FACTOR, y * SCALE_FACTOR, SCALE_FACTOR, SCALE_FACTOR);
            }

        }

        for (var i = 0; i < 16; i++) {

            for (var j = 0; j < 8; j++) {
                context.fillStyle = COLORS[i][j];
                context.fillRect(j * 16 + 672, i * 16, 16, 16);
            }

        }
    }

    _game = {
        init: function(canvasEl) {
            if (canvasEl !== undefined) {
                var $canvas = $(canvasEl);

                CANVAS_WIDTH = canvasEl.width;
                CANVAS_HEIGHT = canvasEl.height;
                CANVAS_OFFSET_TOP = $canvas.offset().top;
                CANVAS_OFFSET_LEFT = $canvas.offset().left;
                context = canvasEl.getContext('2d');
            }

            clearInterval(gameLoop);
            gameLoop = setInterval(function() {
                update();
                draw();
            }, 1000 / FPS);
        }
    };

    return _game;

})(jQuery);