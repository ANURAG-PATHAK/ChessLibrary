/**
 * This module provides the Bishop class which implements the IPiece interface. 
 * It is used to represent a Bishop piece in a chess game.
 * @packageDocumentation
 */

import { IPiece } from "./IPiece";
import { IBehavior } from "../Behaviors/IBehavior";
import { BishopBehavior } from "../Behaviors/BishopBehavior";
import { PieceName } from "../Constants/PieceName";
/**
 * @class
 * @public
 * @implements {IPiece}
 * 
 * Represents a Bishop piece in a chess game.
 */
export class Bishop implements IPiece {
    /**
     * @public
     * @type {boolean}
     * 
     * A boolean indicating whether the Bishop piece is white.
     */
    public isWhite: boolean;

    /**
     * @public
     * @type {IBehavior}
     * 
     * The behavior of the Bishop piece.
     */
    public behavior: IBehavior;

    /**
     * @public
     * @type {PieceName}
     * 
     * The name of the Bishop piece.
     */
    public pieceName: PieceName;

    /**
     * Creates a new Bishop piece.
     * 
     * @public
     * @constructor
     * @param {boolean} isWhite - A boolean indicating whether the Bishop piece is white.
     */
    constructor(isWhite: boolean) {
        this.isWhite = isWhite;
        this.behavior = new BishopBehavior();
        this.pieceName = PieceName.Bishop;
    }
}