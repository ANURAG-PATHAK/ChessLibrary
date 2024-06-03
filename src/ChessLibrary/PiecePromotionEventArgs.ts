import { Cell } from "./Cell";

/**
 * Class representing the event arguments for a piece's promotion event.
 * 
 * @class
 * @public
 */
export class PiecePromotionEventArgs {
    /**
     * The final location of the promoted piece.
     * 
     * @type {Cell}
     */
    finalLocation: Cell;

    /**
     * Creates a new instance of PiecePromotionEventArgs.
     * 
     * @param {Cell} finalLocation - The final location of the promoted piece.
     */
    constructor(finalLocation: Cell) {
        this.finalLocation = finalLocation;
    }
}