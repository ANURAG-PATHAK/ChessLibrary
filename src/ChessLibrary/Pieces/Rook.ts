/**
 * This module provides the Rook class which implements the IPiece interface. 
 * It is used to represent a Rook piece in a chess game.
 * @packageDocumentation
 */

import { IBehavior } from "../Behaviors/IBehavior";
import { RookBehavior } from "../Behaviors/RookBehavior";
import { IPiece } from "./IPiece";

/**
 * @class
 * @public
 * @implements {IPiece}
 * 
 * Represents a Rook piece in a chess game.
 */
export class Rook implements IPiece {
    /**
     * @public
     * @type {boolean}
     * 
     * A boolean indicating whether the Rook piece is white.
     */
    public isWhite: boolean;

    /**
     * @public
     * @type {IBehavior}
     * 
     * The behavior of the Rook piece.
     */
    public behavior: IBehavior;

    /**
     * Creates a new Rook piece.
     * 
     * @public
     * @constructor
     * @param {boolean} isWhite - A boolean indicating whether the Rook piece is white.
     */
    constructor(isWhite: boolean) {
        this.isWhite = isWhite;
        this.behavior = new RookBehavior();
    }
}