import { ChessBoard } from "../ChessBoard";
import { Point } from "../Constants/Point";
import { IBehavior } from "./IBehavior";
import { IPiece } from "../Pieces/IPiece";


/**
 * @class
 * @public
 * @implements {IBehavior}
 */
export abstract class Behavior implements IBehavior {
    /**
     * Determines whether a chess piece can move to a specified location on the chess board.
     *
     * @protected
     * @param {ChessBoard} board - The chess board.
     * @param {Point} location - The location to which the chess piece wants to move.
     * @returns {boolean} - Returns true if the chess piece can move to the specified location, false otherwise.
     */
    protected canMove(board: ChessBoard, location: Point): boolean {
        return board.board[location.x][location.y].piece == null;
    }

    /**
     * Determines whether a chess piece can knock out another piece at a specified location on the chess board.
     *
     * @protected
     * @param {ChessBoard} board - The chess board.
     * @param {Point} location - The location of the piece to be knocked out.
     * @param {boolean} pieceColor - The color of the knocking piece.
     * @returns {boolean} - Returns true if the chess piece can knock out the other piece, false otherwise.
     */
    protected canKnock(board: ChessBoard, location: Point, pieceColor: boolean): boolean {
        const piece: IPiece = board.board[location.x][location.y].piece;
        return piece != null && piece.isWhite != pieceColor
    }

    /**
     * Abstract method to get all possible moves for a chess piece from a specified location.
     *
     * @public
     * @abstract
     * @param {ChessBoard} board - The chess board.
     * @param {Point} location - The current location of the chess piece.
     * @param {boolean} pieceColor - The color of the chess piece.
     * @returns {Array<Point>} - An array of points representing all possible moves for the chess piece.
     */
    public abstract getAllMoves(board: ChessBoard, location: Point, pieceColor: boolean): Array<Point>;
}