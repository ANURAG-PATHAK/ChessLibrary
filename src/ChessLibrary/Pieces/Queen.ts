/**
 * This module provides the Queen class which implements the IPiece interface. 
 * It is used to represent a Queen piece in a chess game.
 * @packageDocumentation
 */

import { IBehavior } from "../Behaviors/IBehavior";
import { QueenBehavior } from "../Behaviors/QueenBehavior";
import { IPiece } from "./IPiece";

/**
 * @class
 * @public
 * @implements {IPiece}
 * 
 * Represents a Queen piece in a chess game.
 */
export class Queen implements IPiece {
    /**
     * @public
     * @type {boolean}
     * 
     * A boolean indicating whether the Queen piece is white.
     */
    public isWhite: boolean;

    /**
     * @public
     * @type {IBehavior}
     * 
     * The behavior of the Queen piece.
     */
    public behavior: IBehavior;

    /**
     * Creates a new Queen piece.
     * 
     * @public
     * @constructor
     * @param {boolean} isWhite - A boolean indicating whether the Queen piece is white.
     */
    constructor(isWhite: boolean) {
        this.isWhite = isWhite;
        this.behavior = new QueenBehavior();
    }
}