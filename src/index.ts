export { Cell } from './Cell';
export { CellFactory } from './CellFactory';
export { ChessBoard } from './ChessBoard';
export { FileOperations } from './FileOperations';
export { GameOverEventArgs } from './GameOverEventArgs';
export { GameStateInformation } from './GameStateInformation';
export { PieceInfo } from './PieceInfo';
export { PieceMotionEventArgs } from './PieceMotionEventArgs';
export { PiecePromotionEventArgs } from './PiecePromotionEventArgs';
export { Point } from './Constants/Point';
export { PieceName } from './Constants/PieceName';

import { BishopBehavior, KingBehavior, KnightBehavior, PawnBehavior, QueenBehavior, RookBehavior, Behavior } from './Behaviors';
const Behaviors = {
    Behavior,
    BishopBehavior,
    KingBehavior,
    KnightBehavior,
    PawnBehavior,
    QueenBehavior,
    RookBehavior
};
export { Behaviors };

import { Pawn, King, Knight, Queen, Rook, Bishop } from './Pieces';
const Pieces = {
    Pawn,
    King,
    Knight,
    Queen,
    Rook,
    Bishop
};
export { Pieces };

import { IBehavior } from './Behaviors';
import { IPiece } from './Pieces';

export type { IBehavior, IPiece };
