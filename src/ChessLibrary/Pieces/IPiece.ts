/**
 * Represents a chess piece.
 * @packageDocumentation
 */
import { IBehavior } from "../Behaviors/IBehavior";

/**
 * Interface representing a chess piece.
 */
export interface IPiece {
    /**
     * Indicates whether the chess piece is white.
     * @type {boolean}
     */
    isWhite: boolean;

    /**
     * The behavior of the chess piece, defining its possible moves.
     * @type {IBehavior}
     */
    behavior: IBehavior;
}