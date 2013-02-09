var Game = (function($, undefined) {

    var

    // The main Game instance
    _game,

    // Color used when clearing the screen
    CLEAR_COLOR = COLORS[0][0],

    // Properties of the canvas
    CANVAS_WIDTH,
    CANVAS_HEIGHT,
    CANVAS_OFFSET_TOP,
    CANVAS_OFFSET_LEFT,

    // Factor by which to scale each pixel by
    SCALE_FACTOR = 4,

    // Frames per second to run the game at
    FPS = 30,

    // The canvas element
    canvas,

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
        canvas.width = canvas.width;
        context.fillStyle = CLEAR_COLOR;
        context.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

        // Draw out the terrain and any hazards
        Level.draw(context);

        _game.drawSprite(Sprites.MudPit.open, 50, 100);

        // Display the palette
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
                canvas = canvasEl;
                var $canvas = $(canvasEl);

                CANVAS_WIDTH = canvasEl.width;
                CANVAS_HEIGHT = canvasEl.height;
                CANVAS_OFFSET_TOP = $canvas.offset().top;
                CANVAS_OFFSET_LEFT = $canvas.offset().left;
                context = canvasEl.getContext('2d');

                Level.init();
            }

            clearInterval(gameLoop);
            gameLoop = setInterval(function() {
                update();
                draw();
            }, 1000 / FPS);
        },

        /**
         * Returns the size of the canvas
         * @return {Object}
         */
        getCanvasSize: function() {
            return { x: CANVAS_WIDTH, y: CANVAS_HEIGHT };
        },

        /**
         * Draws out a sprite
         *
         * @param sprite    A sprite array
         * @param x         X position
         * @param y         Y position
         */
        drawSprite: function(sprite, x, y) {
            for (var row = 0, totalRows = sprite.length; row < totalRows; row++) {
                for (var col = 0, totalCols = sprite[row].length; col < totalCols; col++) {
                    var color = sprite[row][col];

                    if (color === null) {
                        continue;
                    }

                    context.fillStyle = COLORS[color[0]][color[1]];
                    context.fillRect((x + col) * SCALE_FACTOR, (y + row) * SCALE_FACTOR, SCALE_FACTOR, SCALE_FACTOR);
                }
            }
        }
    };

    return _game;

})(jQuery);