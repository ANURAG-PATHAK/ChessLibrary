/**
 * Represents a cell on a chess board.
 * @packageDocumentation
 */
import { IPiece } from "./Pieces/IPiece";
import { Point } from "./Constants/Point"

/**
 * Class representing a cell on a chess board.
 * @public
 * @class
 * 
 * @property {IPiece} piece - The chess piece on the cell. Undefined if the cell is empty.
 * @property {boolean} cellColor - The color of the cell. True for white, false for black.
 * @property {Point} location - The location of the cell on the board.
 */
export class Cell {
    public piece: IPiece;
    public cellColor: boolean;
    public location: Point;

    /**
     * Create a cell.
     * @param {Point} location - The location of the cell on the board.
     * @param {boolean} cellColor - The color of the cell. True for white, false for black.
     * @param {IPiece} [piece] - The chess piece on the cell. Undefined if the cell is empty.
     */
    constructor(location: Point, cellColor: boolean, piece: IPiece) {
        this.location = location;
        this.cellColor = cellColor;
        this.piece = piece;
    }
}