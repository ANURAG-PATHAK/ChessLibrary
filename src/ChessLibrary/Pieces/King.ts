/**
 * This module provides the King class which implements the IPiece interface. 
 * It is used to represent a King piece in a chess game.
 * @packageDocumentation
 */

import { IPiece } from "./IPiece";
import { IBehavior } from "../Behaviors/IBehavior";
import { KingBehavior } from "../Behaviors/KingBehavior";

/**
 * @class
 * @public
 * @implements {IPiece}
 * 
 * Represents a King piece in a chess game.
 */
export class King implements IPiece {
    /**
     * @public
     * @type {boolean}
     * 
     * A boolean indicating whether the King piece is white.
     */
    public isWhite: boolean;

    /**
     * @public
     * @type {IBehavior}
     * 
     * The behavior of the King piece.
     */
    public behavior: IBehavior;

    /**
     * Creates a new King piece.
     * 
     * @public
     * @constructor
     * @param {boolean} isWhite - A boolean indicating whether the King piece is white.
     */
    constructor(isWhite: boolean) {
        this.isWhite = isWhite;
        this.behavior = new KingBehavior();
    }
}