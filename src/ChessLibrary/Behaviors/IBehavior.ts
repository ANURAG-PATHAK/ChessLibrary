/**
 * Represents a behavior of a chess piece.
 * @packageDocumentation
 */
import { Point } from "../Constants/Point";
import { ChessBoard } from "../ChessBoard";

/**
 * Interface representing a behavior of a chess piece.
 */
export interface IBehavior {
    /**
     * Get all possible moves for a chess piece.
     * @param {ChessBoard} board - The chess board.
     * @param {Point} location - The location of the chess piece on the board.
     * @param {boolean} IsWhite - True if the chess piece is white, false if it is black.
     * @return {Point[]} An array of points representing all possible moves for the chess piece.
     */
    getAllMoves(board: ChessBoard, location: Point, IsWhite: boolean): Point[];
}