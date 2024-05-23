import Cell from './Cell'
import CellFactory from './CellFactory'
import { PieceInfo } from './PieceInfo'

export class ChessBoard {
    private readonly _board: Cell;
    private readonly _factory: CellFactory;
    private _isWhite: boolean;
    private _maxRows: number;
    private _maxCols: number;
    private _gameState: Array<PieceInfo>;
    constructor(maxRows: number, maxCols: number, firstPlayerIsWhite: boolean) {
        this._factory = new CellFactory();
        this._board = new Cell(maxRows, maxCols);
        this._maxRows = maxRows;
        this._maxCols = maxCols;
        this._isWhite = firstPlayerIsWhite;
        this._gameState = [];
    }
}