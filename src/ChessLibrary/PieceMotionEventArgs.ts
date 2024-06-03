import { Cell } from "./Cell";

/**
 * Class representing the event arguments for a piece's motion event.
 * 
 * @class
 * @public
 */
export class PieceMotionEventArgs {
    /**
     * The initial location of the piece.
     * 
     * @type {Cell}
     */
    initialLocation: Cell;

    /**
     * The final location of the piece.
     * 
     * @type {Cell}
     */
    finalLocation: Cell;

    /**
     * Creates a new instance of PieceMotionEventArgs.
     * 
     * @param {Cell} initialLocation - The initial location of the piece.
     * @param {Cell} finalLocation - The final location of the piece.
     */
    constructor(initialLocation: Cell, finalLocation: Cell) {
        this.initialLocation = initialLocation;
        this.finalLocation = finalLocation;
    }
}