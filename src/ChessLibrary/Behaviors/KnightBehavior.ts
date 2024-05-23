/**
 * This module provides the KnightBehavior class which extends the Behavior class. 
 * It is used to determine the possible moves for a Knight piece in a chess game.
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
* Represents the behavior of a Knight piece in a chess game.
*/
export class KnightBehavior extends Behavior {
    /**
    * Gets all possible moves for a Knight piece at a given location on the chess board.
    * 
    * @public
    * @override
    * @param {ChessBoard} board - The chess board.
    * @param {Point} location - The current location of the Knight piece.
    * @param {boolean} pieceColor - A boolean indicating whether the Knight piece is white.
    * @returns {Point[]} An array of points representing all possible moves for the Knight piece.
    * 
    */
    public override getAllMoves(board: ChessBoard, location: Point, pieceColor: boolean): Point[] {
        const moves: Point[] = new Array<Point>();
        if (location.x < board.maxRows - 2 && location.y < board.maxCols - 1) {
            const newLocation: Point = new Point(location.x + 2, location.y + 1);
            if (this.canMove(board, newLocation)) {
                moves.push(newLocation);
            }
            else if (this.canKnock(board, newLocation, pieceColor)) {
                moves.push(newLocation);
            }
        }
        if (location.x < board.maxRows - 1 && location.y < board.maxCols - 2) {
            const newLocation: Point = new Point(location.x + 1, location.y + 2);
            if (this.canMove(board, newLocation)) {
                moves.push(newLocation);
            }
            else if (this.canKnock(board, newLocation, pieceColor)) {
                moves.push(newLocation);
            }
        }
        if (location.x > 0 && location.y < board.maxCols - 2) {
            const newLocation: Point = new Point(location.x - 1, location.y + 2);
            if (this.canMove(board, newLocation)) {
                moves.push(newLocation);
            }
            else if (this.canKnock(board, newLocation, pieceColor)) {
                moves.push(newLocation);
            }
        }
        if (location.x > 1 && location.y < board.maxCols - 1) {
            const newLocation: Point = new Point(location.x - 2, location.y + 1);
            if (this.canMove(board, newLocation)) {
                moves.push(newLocation);
            }
            else if (this.canKnock(board, newLocation, pieceColor)) {
                moves.push(newLocation);
            }
        }
        if (location.x < board.maxRows - 2 && location.y > 0) {
            const newLocation: Point = new Point(location.x + 2, location.y - 1);
            if (this.canMove(board, newLocation)) {
                moves.push(newLocation);
            }
            else if (this.canKnock(board, newLocation, pieceColor)) {
                moves.push(newLocation);
            }
        }
        if (location.x < board.maxRows - 1 && location.y > 1) {
            const newLocation: Point = new Point(location.x + 1, location.y - 2);
            if (this.canMove(board, newLocation)) {
                moves.push(newLocation);
            }
            else if (this.canKnock(board, newLocation, pieceColor)) {
                moves.push(newLocation);
            }
        }
        if (location.x > 1 && location.y > 0) {
            const newLocation: Point = new Point(location.x - 2, location.y - 1);
            if (this.canMove(board, newLocation)) {
                moves.push(newLocation);
            }
            else if (this.canKnock(board, newLocation, pieceColor)) {
                moves.push(newLocation);
            }
        }
        if (location.x > 0 && location.y > 1) {
            const newLocation: Point = new Point(location.x - 1, location.y - 2);
            if (this.canMove(board, newLocation)) {
                moves.push(newLocation);
            }
            else if (this.canKnock(board, newLocation, pieceColor)) {
                moves.push(newLocation);
            }
        }
        return moves;
    }
}