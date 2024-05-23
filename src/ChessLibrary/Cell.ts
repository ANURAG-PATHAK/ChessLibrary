/**
 * Represents a cell on a chess board.
 * @packageDocumentation
 */
import { IPiece } from "./Pieces/IPiece";
import { Point } from "./Constants/Point"

/**
 * Class representing a cell on a chess board.
 */
export class Cell {
    private _piece: IPiece | undefined;
    private _cellColor: boolean;
    private _location: Point;

    /**
     * Create a cell.
     * @param {Point} location - The location of the cell on the board.
     * @param {boolean} cellColor - The color of the cell. True for white, false for black.
     * @param {IPiece} [piece] - The chess piece on the cell. Undefined if the cell is empty.
     */
    constructor(location: Point, cellColor: boolean, piece?: IPiece) {
        this._location = location;
        this._cellColor = cellColor;
        this._piece = piece;
        Object.defineProperties(this, {
            /**
             * Get or set the chess piece on the cell.
             * @type {IPiece}
             */
            piece: {
                get: () => this._piece,
                set: (value: IPiece) => this._piece = value
            },
            /**
             * Get the location of the cell on the board.
             * @type {Point}
             */
            location: {
                get: () => this._location
            },
            /**
             * Get the color of the cell.
             * @type {boolean}
             */
            cellColor: {
                get: () => this._cellColor
            }
        });
    }
}