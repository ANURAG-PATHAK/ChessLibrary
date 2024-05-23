import { Point } from "../Constants/Point";
import { ChessBoard } from "../ChessBoard";

export interface IBehavior {
    getAllMoves(board: ChessBoard, location: Point, IsWhite: boolean): Point[];
}