import { Cell } from './Cell'
import { CellFactory } from './CellFactory'
import { PieceInfo } from './PieceInfo'

export class ChessBoard {
    private readonly _board: Array<Array<Cell>>;
    private readonly _factory: CellFactory;
    private _isWhite: boolean;
    private _maxRows: number;
    private _maxCols: number;
    private _gameState: Array<PieceInfo>;
    constructor(maxRows: number, maxCols: number, firstPlayerIsWhite: boolean) {
        this._factory = new CellFactory();
        this._board = new Array<Array<Cell>>();
        this._maxRows = maxRows;
        this._maxCols = maxCols;
        this._isWhite = firstPlayerIsWhite;
        this._gameState = [];
        Object.defineProperties(this, {
            isWhite: {
                get: () => this._isWhite,
                set: (value: boolean) => this._isWhite = value
            },
            maxRows: {
                get: () => this._maxRows
            },
            maxCols: {
                get: () => this._maxCols
            },
            board: {
                get: () => this._board,
            },
            gameState: {
                get: () => this._gameState,
                set: (value: Array<PieceInfo>) => this._gameState = value
            }
        });
        this._factory.createCells(this);
    }
}