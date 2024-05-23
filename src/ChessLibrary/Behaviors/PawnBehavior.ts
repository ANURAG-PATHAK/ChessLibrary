/**
 * This module provides the PawnBehavior class which extends the Behavior class. 
 * It is used to determine the possible moves for a Pawn piece in a chess game.
 * @packageDocumentation
 */

import { ChessBoard } from "../ChessBoard";
import { Point } from "../Constants/Point";
import { Behavior } from "./Behavior";

/**
 * @class
 * @public
 * @extends {Behavior}
 * 
 * Represents the behavior of a Pawn piece in a chess game.
 */
export class PawnBehavior extends Behavior {
    /**
     * Gets all possible moves for a Pawn piece at a given location on the chess board.
     * 
     * @public
     * @override
     * @param {ChessBoard} board - The chess board.
     * @param {Point} location - The current location of the Pawn piece.
     * @param {boolean} pieceColor - A boolean indicating whether the Pawn piece is white.
     * @returns {Point[]} An array of points representing all possible moves for the Pawn piece.
     * 
     */
    public override getAllMoves(board: ChessBoard, location: Point, pieceColor: boolean): Point[] {
        const moves: Point[] = new Array<Point>();
        if (pieceColor == board.isWhite) {
            if (location.x == 1) {
                if (this.canMove(board, new Point(location.x + 1, location.y))) {
                    moves.push(new Point(location.x + 1, location.y));
                    if (this.canMove(board, new Point(location.x + 2, location.y))) {
                        moves.push(new Point(location.x + 2, location.y));
                    }
                }
                if (location.y < board.maxCols - 1 && this.canKnock(board, new Point(location.x + 1, location.y + 1), pieceColor)) {
                    moves.push(new Point(location.x + 1, location.y + 1));
                }
                if (location.y > 0 && this.canKnock(board, new Point(location.x + 1, location.y - 1), pieceColor)) {
                    moves.push(new Point(location.x + 1, location.y - 1));
                }
            }
            else if (location.x < board.maxRows - 1 && location.x > 0) {
                if (this.canMove(board, new Point(location.x + 1, location.y))) {
                    moves.push(new Point(location.x + 1, location.y));
                }
                if (location.y < board.maxCols - 1 && this.canKnock(board, new Point(location.x + 1, location.y + 1), pieceColor)) {
                    moves.push(new Point(location.x + 1, location.y + 1));
                }
                if (location.y > 0 && this.canKnock(board, new Point(location.x + 1, location.y - 1), pieceColor)) {
                    moves.push(new Point(location.x + 1, location.y - 1));
                }
            }
        }
        else {
            if (location.x == 6) {
                if (this.canMove(board, new Point(location.x - 1, location.y))) {
                    moves.push(new Point(location.x - 1, location.y));
                    if (this.canMove(board, new Point(location.x - 2, location.y))) {
                        moves.push(new Point(location.x - 2, location.y));
                    }
                }
                if (location.y < board.maxCols - 1 && this.canKnock(board, new Point(location.x - 1, location.y + 1), pieceColor)) {
                    moves.push(new Point(location.x - 1, location.y + 1));
                }
                if (location.y > 0 && this.canKnock(board, new Point(location.x - 1, location.y - 1), pieceColor)) {
                    moves.push(new Point(location.x - 1, location.y - 1));
                }
            }
            else if (location.x < board.maxRows - 1 && location.x > 0) {
                if (this.canMove(board, new Point(location.x - 1, location.y))) {
                    moves.push(new Point(location.x - 1, location.y));
                }
                if (location.y < board.maxCols - 1 && this.canKnock(board, new Point(location.x - 1, location.y + 1), pieceColor)) {
                    moves.push(new Point(location.x - 1, location.y + 1));
                }
                if (location.y > 0 && this.canKnock(board, new Point(location.x - 1, location.y - 1), pieceColor)) {
                    moves.push(new Point(location.x - 1, location.y - 1));
                }
            }
        }
        return moves;
    }
}