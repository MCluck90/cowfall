/**
 * Represents a basic game object
 */
var GameObject = function() {
    /**
     * X position
     * @type {Number}
     */
    this.x = 0;

    /**
     * Y position
     * @type {Number}
     */
    this.y = 0;

    /**
     * Width of the object
     * @type {Number}
     */
    this.width = 0;

    /**
     * Height of the object
     * @type {Number}
     */
    this.height = 0;

    /**
     *
     * @type {null|[]}
     */
    this.sprite = null;
};