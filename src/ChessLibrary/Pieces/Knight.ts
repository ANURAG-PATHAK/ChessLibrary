/**
 * This module provides the Knight class which implements the IPiece interface. 
 * It is used to represent a Knight piece in a chess game.
 * @packageDocumentation
 */

import { IBehavior } from "../Behaviors/IBehavior";
import { KnightBehavior } from "../Behaviors/KnightBehavior";
import { IPiece } from "./IPiece";

/**
 * @class
 * @public
 * @implements {IPiece}
 * 
 * Represents a Knight piece in a chess game.
 */
export class Knight implements IPiece {
    /**
     * @public
     * @type {boolean}
     * 
     * A boolean indicating whether the Knight piece is white.
     */
    public isWhite: boolean;

    /**
     * @public
     * @type {IBehavior}
     * 
     * The behavior of the Knight piece.
     */
    public behavior: IBehavior;

    /**
     * Creates a new Knight piece.
     * 
     * @public
     * @constructor
     * @param {boolean} isWhite - A boolean indicating whether the Knight piece is white.
     */
    constructor(isWhite: boolean) {
        this.isWhite = isWhite;
        this.behavior = new KnightBehavior();
    }
}