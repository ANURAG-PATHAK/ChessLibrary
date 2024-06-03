/**
 * Class representing a chess board.
 * @packageDocumentation
 */
import { Cell } from "./Cell";
import { CellFactory } from "./CellFactory";
import { PieceInfo } from "./PieceInfo";

/**
 * @public
 * @class
 *
 * @property {Array<Array<Cell>>} board - A 2D array representing the chess board. Each element is a Cell object.
 * @property {boolean} isWhite - Indicates whether the first player is playing with the white pieces.
 * @property {number} maxRows - The maximum number of rows on the chess board.
 * @property {number} maxCols - The maximum number of columns on the chess board.
 * @property {Array<PieceInfo>} gameState - An array representing the current state of the game. Each element is a PieceInfo object.
 *
 */
export class ChessBoard {
    public readonly board: Array<Array<Cell>>;
    private _factory: CellFactory;
    public isWhite: boolean;
    public maxRows: number;
    public maxCols: number;
    public gameState: Array<PieceInfo>;

    /**
     * Creates a new chess board.
     *
     * @param {number} maxRows - The maximum number of rows on the chess board.
     * @param {number} maxCols - The maximum number of columns on the chess board.
     * @param {boolean} firstPlayerIsWhite - Indicates whether the first player is playing with the white pieces.
     */
    constructor(maxRows: number, maxCols: number, firstPlayerIsWhite: boolean) {
        this._factory = new CellFactory();
        this.board = new Array<Array<Cell>>();
        this.maxRows = maxRows;
        this.maxCols = maxCols;
        this.isWhite = firstPlayerIsWhite;
        this.gameState = [];
        this._factory.createCells(this);
    }
}