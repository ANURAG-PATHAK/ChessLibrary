/**
 * Represents information about a chess piece.
 * @packageDocumentation
 */
import { Point } from "./Constants/Point";
import { PieceName } from "./Constants/PieceName";

/**
 * Class representing information about a chess piece.
 * @public
 * @class
 * @property {PieceName } pieceName - The name of the chess piece. It can be one of the values defined in the [`PieceName`](src/ChessLibrary/Constants/PieceName.ts) enum.
 * @property {boolean } isWhite - Indicates whether the chess piece is white. If undefined, the color of the piece is not set.
 * @property {Point } location - The current location of the chess piece on the chess board. If undefined, the location of the piece is not set.
 */
export class PieceInfo {
    public pieceName: PieceName | undefined;
    public isWhite: boolean;
    public location: Point;

    /**
     * Creates a new PieceInfo object.
     * @public
     * @constructor
     * @param {PieceName} pieceName - The name of the chess piece.
     * @param {boolean} isWhite - Indicates whether the chess piece is white.
     * @param {Point} location - The current location of the chess piece on the chess board.
     */
    constructor(pieceName: PieceName | undefined, isWhite: boolean, location: Point) {
        this.pieceName = pieceName;
        this.isWhite = isWhite;
        this.location = location;
    }
}