/**
 * This module provides the King class which implements the IPiece interface. 
 * It is used to represent a King piece in a chess game.
 * @packageDocumentation
 */

import { IPiece } from "./IPiece";
import { IBehavior } from "../Behaviors/IBehavior";
import { KingBehavior } from "../Behaviors/KingBehavior";
import { PieceName } from "../Constants/PieceName";

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
     * @public
     * @type {PieceName}
     * 
     * The name of the King piece.
     */
    public pieceName: PieceName;

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
        this.pieceName = PieceName.King;
    }
}