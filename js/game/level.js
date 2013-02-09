/**
 * Defines how a level works
 */

var Level = (function() {

    var

    // Terrain colors
    SKY_COLOR = COLORS[10][5],
    GRASS_COLOR = COLORS[12][1],
    DIRT_COLOR = COLORS[15][2],
    HILLS_COLOR = COLORS[13][3],

    // Terrain areas
    GRASS_POS = { x: 0, y: 0, w: 0, h: 0 },
    TOP_DIRT_POS = { x: 0, y: 0, w: 0, h: 0 },
    BOTTOM_DIRT_POS = { x: 0, y: 0, w: 0, h: 0 },
    HILLS_POS = { x: 0, y: 0, r: 0 },

    // Size of the canvas
    WIDTH,
    HEIGHT,

    // All of the game objects in the world
    _gameObjects = [],

    // Indicates whether a mud hole will be in the level
    hasMudHole = false,

    // The mud hole will shrivel up
    mudHoleDriesUp = false,

    // If true, the mud hole has pigs (a.k.a alligators)
    mudHoleHasPigs = false,

    // A swing is available
    hasSwing = false,

    // A chicken (a.k.a snake) is at the other end of the level
    hasChicken = false,

    // A treasure is in the room
    hasTreasure = false;

    return {
        init: function(options) {
            options = options || {};

            _gameObjects = options.gameObjects || _gameObjects || [];
            hasMudHole = options.hasMudHole || false;
            mudHoleDriesUp = hasMudHole && options.mudHoleDriesUp;
            mudHoleHasPigs = hasMudHole && !mudHoleDriesUp && options.mudHoleHasPigs;
            hasSwing = (hasMudHole && !mudHoleDriesUp && !mudHoleHasPigs) || (hasMudHole && options.hasSwing);
            hasChicken = options.hasChicken || false;
            hasTreasure = options.hasTreasure || false;

            var canvasSize = Game.getCanvasSize();
            WIDTH = canvasSize.x;
            HEIGHT = canvasSize.y;

            // Initialize the terrain positions
            HILLS_POS = {
                x: 0,
                y: HEIGHT * 0.6,
                r: WIDTH / 6
            };

            GRASS_POS = {
                x: 0,
                y: HEIGHT * 0.6,
                w: WIDTH,
                h: 80
            };

            TOP_DIRT_POS = {
                x: 0,
                y: GRASS_POS.y + GRASS_POS.h,
                w: WIDTH,
                h: 40
            };

            BOTTOM_DIRT_POS = {
                x: 0,
                y: HEIGHT - 20,
                w: WIDTH,
                h: 20
            };
        },

        /**
         *
         * @param {CanvasRenderingContext2D} context
         */
        draw: function(context) {
            /** Draw the sky **/
            context.fillStyle = SKY_COLOR;
            context.fillRect(0, 0, WIDTH, GRASS_POS.y);

            /** Draw the hills in the background **/
            context.save();
            var hillX = HILLS_POS.x;
            context.scale(1, 0.75);
            for (var i = 0; i < 5; i++) {
                context.fillStyle = HILLS_COLOR;
                context.arc(hillX, HILLS_POS.y / 0.75, HILLS_POS.r, 0, Math.PI, true);
                context.fill();
                hillX += HILLS_POS.r * 1.5;
            }
            context.restore();

            /** Draw the ground area **/
            // Grass layer
            context.fillStyle = GRASS_COLOR;
            context.fillRect(GRASS_POS.x, GRASS_POS.y, GRASS_POS.w, GRASS_POS.h);

            // First dirt layer
            context.fillStyle = DIRT_COLOR;
            context.fillRect(TOP_DIRT_POS.x, TOP_DIRT_POS.y, TOP_DIRT_POS.w, TOP_DIRT_POS.h);

            // Bottom dirt layer
            context.fillRect(BOTTOM_DIRT_POS.x, BOTTOM_DIRT_POS.y, BOTTOM_DIRT_POS.w, BOTTOM_DIRT_POS.h);
        }
    }

})();