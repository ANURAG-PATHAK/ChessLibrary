/**
 * This module provides the QueenBehavior class which extends the Behavior class. 
 * It is used to determine the possible moves for a Queen piece in a chess game.
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
 * Represents the behavior of a Queen piece in a chess game.
 */
export class QueenBehavior extends Behavior {
    /**
     * Gets all possible moves for a Queen piece at a given location on the chess board.
     * 
     * @public
     * @override
     * @param {ChessBoard} board - The chess board.
     * @param {Point} location - The current location of the Queen piece.
     * @param {boolean} isWhite - A boolean indicating whether the Queen piece is white.
     * @returns {Point[]} An array of points representing all possible moves for the Queen piece.
     * 
     * The Queen can move any number of squares along a rank, file, or diagonal, but cannot leap over other pieces.
     * If the destination square is occupied by an opponent's piece, the Queen can capture it.
     */
    public override getAllMoves(board: ChessBoard, location: Point, isWhite: boolean): Point[] {
        const moves: Point[] = new Array<Point>();
        let startRow: number = location.x;
        let startCol: number = location.y;
        while (startRow < board.maxRows - 1 && startCol < board.maxCols - 1) {
            const newLocation: Point = new Point(++startRow, ++startCol);
            if (this.canMove(board, newLocation)) {
                moves.push(newLocation);
            }
            else if (this.canKnock(board, newLocation, isWhite)) {
                moves.push(newLocation);
                break;
            }
            else {
                break;
            }
        }
        startRow = location.x;
        startCol = location.y;
        while (startCol > 0 && startRow > 0) {
            const newLocation: Point = new Point(--startRow, --startCol);
            if (this.canMove(board, newLocation)) {
                moves.push(newLocation);
            }
            else if (this.canKnock(board, newLocation, isWhite)) {
                moves.push(newLocation);
                break;
            }
            else {
                break;
            }
        }
        startRow = location.x;
        startCol = location.y;
        while (startRow < board.maxCols - 1 && startCol > 0) {
            const newLocation: Point = new Point(++startRow, --startCol);
            if (this.canMove(board, newLocation)) {
                moves.push(newLocation);
            }
            else if (this.canKnock(board, newLocation, isWhite)) {
                moves.push(newLocation);
                break;
            }
            else {
                break;
            }
        }
        startRow = location.x;
        startCol = location.y;
        while (startCol < board.maxCols - 1 && startRow > 0) {
            const newLocation: Point = new Point(--startRow, ++startCol);
            if (this.canMove(board, newLocation)) {
                moves.push(newLocation);
            }
            else if (this.canKnock(board, newLocation, isWhite)) {
                moves.push(newLocation);
                break;
            }
            else {
                break;
            }
        }
        startRow = location.x;
        startCol = location.y;
        while (startRow < board.maxRows - 1) {
            const newLocation: Point = new Point(++startRow, location.y);
            if (this.canMove(board, newLocation)) {
                moves.push(newLocation);
            }
            else if (this.canKnock(board, newLocation, isWhite)) {
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
            else if (this.canKnock(board, newLocation, isWhite)) {
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
            else if (this.canKnock(board, newLocation, isWhite)) {
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
            else if (this.canKnock(board, newLocation, isWhite)) {
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