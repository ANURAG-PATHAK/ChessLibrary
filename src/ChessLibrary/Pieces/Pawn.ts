/**
 * This module provides the Pawn class which implements the IPiece interface. 
 * It is used to represent a Pawn piece in a chess game.
 * @packageDocumentation
 */

import { IBehavior } from "../Behaviors/IBehavior";
import { PawnBehavior } from "../Behaviors/PawnBehavior";
import { IPiece } from "./IPiece";
import { PieceName } from "../Constants/PieceName";

/**
 * @class
 * @public
 * @implements {IPiece}
 * 
 * Represents a Pawn piece in a chess game.
 */
export class Pawn implements IPiece {
    /**
     * @public
     * @type {boolean}
     * 
     * A boolean indicating whether the Pawn piece is white.
     */
    public isWhite: boolean;

    /**
     * @public
     * @type {IBehavior}
     * 
     * The behavior of the Pawn piece.
     */
    public behavior: IBehavior;

    /**
     * @public
     * @type {PieceName}
     * 
     * The name of the Pawn piece.
     */
    public pieceName: PieceName;

    /**
     * Creates a new Pawn piece.
     * 
     * @public
     * @constructor
     * @param {boolean} isWhite - A boolean indicating whether the Pawn piece is white.
     */
    constructor(isWhite: boolean) {
        this.isWhite = isWhite;
        this.behavior = new PawnBehavior();
        this.pieceName = PieceName.Pawn;
    }
}