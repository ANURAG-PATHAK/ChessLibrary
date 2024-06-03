/**
 * Class responsible for creating and initializing the cells of a chess board.
 * @packageDocumentation
 */
import { Cell } from "./Cell";
import { ChessBoard } from "./ChessBoard";
import { Point } from "./Constants/Point";

/**
 * @public
 * @class
 * @method createCells - Creates and initializes the cells of a chess board.
 */
export class CellFactory {
    /**
     * Creates and initializes the cells of a chess board.
     *
     * @param {ChessBoard} board - The chess board to which the cells will be added.
     */
    public createCells(board: ChessBoard) {
        let lightColor: boolean = true;
        for (let row = 0; row < board.maxRows; row++) {
            for (let col = 0; col < board.maxCols; col++) {
                lightColor = !lightColor;
                board.board[row][col] = new Cell(new Point(row, col), lightColor);
            }
            lightColor = board.board[row][0].cellColor;
        }
    }
}