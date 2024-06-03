/**
 * KingBehavior class which extends the Behavior class. 
 * It is used to determine the possible moves for a King piece in a chess game.
 * @packageDocumentation
 */

import { Behavior } from "./Behavior";
import { ChessBoard } from "../ChessBoard";
import { Point } from "../Constants/Point";

/**
 * @class
 * @public
 * @extends {Behavior}
 * 
 * Represents the behavior of a King piece in a chess game.
 */
export class KingBehavior extends Behavior {
    /**
     * Gets all possible moves for a King piece at a given location on the chess board.
     * 
     * @public
     * @override
     * @param {ChessBoard} board - The chess board.
     * @param {Point} location - The current location of the King piece.
     * @param {boolean} isWhite - A boolean indicating whether the King piece is white.
     * @returns {Point[]} An array of points representing all possible moves for the King piece.
     * 
     * The King can move one square in any direction: horizontally, vertically, or diagonally.
     * If the destination square is occupied by an opponent's piece, the King can capture it.
     */
    public override getAllMoves(board: ChessBoard, location: Point, isWhite: boolean): Point[] {
        const moves: Point[] = new Array<Point>();
        if (location.x < board.maxRows - 1) {
            const newLocation: Point = new Point(location.x + 1, location.y);
            if (this.canMove(board, newLocation)) {
                moves.push(newLocation);
            }
            else if (this.canKnock(board, newLocation, isWhite)) {
                moves.push(newLocation);
            }
        }
        if (location.x > 0) {
            const newLocation: Point = new Point(location.x - 1, location.y);
            if (this.canMove(board, newLocation)) {
                moves.push(newLocation);
            }
            else if (this.canKnock(board, newLocation, isWhite)) {
                moves.push(newLocation);
            }
        }
        if (location.y > 0) {
            const newLocation: Point = new Point(location.x, location.y - 1);
            if (this.canMove(board, newLocation)) {
                moves.push(newLocation);
            }
            else if (this.canKnock(board, newLocation, isWhite)) {
                moves.push(newLocation);
            }
        }
        if (location.y < board.maxCols - 1) {
            const newLocation: Point = new Point(location.x, location.y + 1);
            if (this.canMove(board, newLocation)) {
                moves.push(newLocation);
            }
            else if (this.canKnock(board, newLocation, isWhite)) {
                moves.push(newLocation);
            }
        }
        if (location.x < board.maxRows - 1 && location.y < board.maxCols - 1) {
            const newLocation: Point = new Point(location.x + 1, location.y + 1);
            if (this.canMove(board, newLocation)) {
                moves.push(newLocation);
            }
            else if (this.canKnock(board, newLocation, isWhite)) {
                moves.push(newLocation);
            }
        }
        if (location.x > 0 && location.y > 0) {
            const newLocation: Point = new Point(location.x - 1, location.y - 1);
            if (this.canMove(board, newLocation)) {
                moves.push(newLocation);
            }
            else if (this.canKnock(board, newLocation, isWhite)) {
                moves.push(newLocation);
            }
        }
        if (location.x < board.maxRows - 1 && location.y > 0) {
            const newLocation = new Point(location.x + 1, location.y - 1);
            if (this.canMove(board, newLocation)) {
                moves.push(newLocation);
            }
            else if (this.canKnock(board, newLocation, isWhite)) {
                moves.push(newLocation);
            }
        }
        if (location.x > 0 && location.y < board.maxCols - 1) {
            const newLocation: Point = new Point(location.x - 1, location.y + 1);
            if (this.canMove(board, newLocation)) {
                moves.push(newLocation);
            }
            else if (this.canKnock(board, newLocation, isWhite)) {
                moves.push(newLocation);
            }
        }
        return moves;
    }
}