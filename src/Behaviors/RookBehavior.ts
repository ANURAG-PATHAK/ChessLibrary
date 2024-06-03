/**
 * This module provides the RookBehavior class which extends the Behavior class. 
 * It is used to determine the possible moves for a Rook piece in a chess game.
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
 * Represents the behavior of a Rook piece in a chess game.
 */
export class RookBehavior extends Behavior {
    /**
     * Gets all possible moves for a Rook piece at a given location on the chess board.
     * 
     * @public
     * @override
     * @param {ChessBoard} board - The chess board.
     * @param {Point} location - The current location of the Rook piece.
     * @param {boolean} pieceColor - A boolean indicating whether the Rook piece is white.
     * @returns {Point[]} An array of points representing all possible moves for the Rook piece.
     * 
     */
    public override getAllMoves(board: ChessBoard, location: Point, pieceColor: boolean): Point[] {
        const moves: Point[] = new Array<Point>();
        let startRow: number = location.x;
        let startCol: number = location.y;
        while (startRow < board.maxRows - 1) {
            const newLocation: Point = new Point(++startRow, location.y);
            if (this.canMove(board, newLocation)) {
                moves.push(newLocation);
            }
            else if (this.canKnock(board, newLocation, pieceColor)) {
                moves.push(newLocation);
                break;
            }
            else {
                break;
            }
        }
        while (startCol < board.maxCols - 1) {
            const newLocation: Point = new Point(location.x, ++startCol);
            if (this.canMove(board, newLocation)) {
                moves.push(newLocation);
            }
            else if (this.canKnock(board, newLocation, pieceColor)) {
                moves.push(newLocation);
                break;
            }
            else {
                break;
            }
        }
        startRow = location.x;
        startCol = location.y;
        while (startRow > 0) {
            const newLocation: Point = new Point(--startRow, location.y);
            if (this.canMove(board, newLocation)) {
                moves.push(newLocation);
            }
            else if (this.canKnock(board, newLocation, pieceColor)) {
                moves.push(newLocation);
                break;
            }
            else {
                break;
            }
        }
        while (startCol > 0) {
            const newLocation: Point = new Point(location.x, --startCol);
            if (this.canMove(board, newLocation)) {
                moves.push(newLocation);
            }
            else if (this.canKnock(board, newLocation, pieceColor)) {
                moves.push(newLocation);
                break;
            }
            else {
                break;
            }
        }
        return moves;
    }
}