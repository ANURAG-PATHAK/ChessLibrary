import { PieceInfo } from './PieceInfo';

/**
 * Class representing the state of a chess game.
 * 
 * @class
 * @public
 */
export class GameStateInformation {
    /**
     * Indicates the current player.
     * 
     * @type {boolean}
     */
    currentPlayer: boolean;

    /**
     * An array of PieceInfo objects representing the state of each piece.
     * 
     * @type {PieceInfo[]}
     */
    pieceInfo: PieceInfo[];

    /**
     * Creates a new instance of GameStateInformation.
     */
    constructor() {
        this.currentPlayer = false;
        this.pieceInfo = [];
    }
}