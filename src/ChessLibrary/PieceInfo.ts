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
 * @property {PieceName | undefined} pieceName - The name of the chess piece. It can be one of the values defined in the [`PieceName`](src/ChessLibrary/Constants/PieceName.ts) enum.
 * @property {boolean | undefined} isWhite - Indicates whether the chess piece is white. If undefined, the color of the piece is not set.
 * @property {Point | undefined} location - The current location of the chess piece on the chess board. If undefined, the location of the piece is not set.
 */
export class PieceInfo {
    public pieceName: PieceName | undefined;
    public isWhite: boolean | undefined;
    public location: Point | undefined;
}