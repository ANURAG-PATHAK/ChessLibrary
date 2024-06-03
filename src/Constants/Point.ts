/**
 * Class representing a point in a two-dimensional space.
 * @packageDocumentation
 */

/**
 * @class
 * @public
 *
 * @property {number} x - The x-coordinate of the point.
 * @property {number} y - The y-coordinate of the point.
 *
 */
export class Point {
    public x: number;
    public y: number;
    /**
     * Creates a new point.
     *
     * @param {number} x - The x-coordinate of the point.
     * @param {number} y - The y-coordinate of the point.
     */
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}