import { IBehavior } from "../Behaviors/IBehavior";

export interface IPiece {
    isWhite: boolean;
    behavior: IBehavior;
}