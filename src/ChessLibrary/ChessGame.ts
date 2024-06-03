import { ChessBoard } from "./ChessBoard";
import { PiecePromotionEventArgs } from "./PiecePromotionEventArgs";
import { Pawn } from "./Pieces/Pawn";
import { Rook } from "./Pieces/Rook";
import { Knight } from "./Pieces/Knight";
import { King } from "./Pieces/King";
import { Queen } from "./Pieces/Queen";
import { Bishop } from "./Pieces/Bishop";
import { PieceMotionEventArgs } from "./PieceMotionEventArgs";
import { GameOverEventArgs } from "./GameOverEventArgs";
import { GameStateInformation } from "./GameStateInformation";
import { FileOperations } from "./FileOperations";
import { PieceInfo } from "./PieceInfo";
import { Cell } from "./Cell";
import { Point } from "./Constants/Point";
import { PieceName } from "./Constants/PieceName";

export class ChessGame {
    public chessBoard: ChessBoard = new ChessBoard(8, 8, true);
    public currentPlayer: boolean = true;
    public piecePromoted: (args: PiecePromotionEventArgs) => void = () => { };
    public pieceMoved: (args: PieceMotionEventArgs) => void = () => { };
    public gameOver: (args: GameOverEventArgs) => void = () => { };

    public loadGame(file: string) {
        if (FileOperations.fileExists(file)) {
            let gameState: GameStateInformation = FileOperations.readFile(file);
            this.currentPlayer = gameState.currentPlayer;
            this.placePieces(gameState.pieceInfo);
        } else {
            throw new Error("File not found");
        }
    }

    public saveGame(file: string) {
        let gameStateInformation: GameStateInformation = new GameStateInformation();
        let pieceInfoList: PieceInfo[] = [];
        for (let i = 0; i < this.chessBoard.maxRows; i++) {
            for (let j = 0; j < this.chessBoard.maxCols; j++) {
                if (this.chessBoard.board[i][j].piece != null) {
                    let pieceInfo: PieceInfo = new PieceInfo(
                        this.chessBoard.board[i][j].piece?.pieceName,
                        this.chessBoard.board[i][j].piece?.isWhite == this.chessBoard.isWhite ? true : false,
                        new Point(i, j)
                    );
                    pieceInfoList.push(pieceInfo);
                }
            }
        }
        gameStateInformation.pieceInfo = pieceInfoList;
        gameStateInformation.currentPlayer = this.currentPlayer;
        FileOperations.writeFile(file, gameStateInformation);
    }

    public eraseFile(file: string) {
        FileOperations.eraseFile(file);
    }

    private checkForPromotion(cell: Cell): boolean {
        return (cell.location.x == 7 && cell.piece?.pieceName == PieceName.Pawn && cell.piece.isWhite) || (cell.location.x == 0 && cell.piece?.pieceName == PieceName.Pawn && !cell.piece.isWhite);
    }

    public movePiece(initialCell: Cell, targetCell: Cell) {
        if (initialCell.piece && initialCell.piece.behavior.getAllMoves(this.chessBoard, initialCell.location, initialCell.piece.isWhite).includes(targetCell.location)) {
            targetCell.piece = initialCell.piece;
            if (this.checkForPromotion(targetCell)) {
                this.piecePromoted(new PiecePromotionEventArgs(targetCell));
            } else {
                this.pieceMoved(new PieceMotionEventArgs(initialCell, targetCell));
            }
            if (targetCell.piece != undefined && targetCell.piece.pieceName == PieceName.King) {
                this.gameOver(new GameOverEventArgs(initialCell.piece.isWhite));
            }
            initialCell.piece = undefined;
        }
    }

    private placePieces(pieceInfo: PieceInfo[]) {
        for (let piece of pieceInfo) {
            let location: Point = piece.location!
            switch (piece.pieceName) {
                case PieceName.Pawn:
                    this.chessBoard.board[location.x][location.y].piece = new Pawn(piece.isWhite);
                    break;
                case PieceName.Rook:
                    this.chessBoard.board[location.x][location.y].piece = new Rook(piece.isWhite);
                    break;
                case PieceName.Knight:
                    this.chessBoard.board[location.x][location.y].piece = new Knight(piece.isWhite);
                    break;
                case PieceName.King:
                    this.chessBoard.board[location.x][location.y].piece = new King(piece.isWhite);
                    break;
                case PieceName.Queen:
                    this.chessBoard.board[location.x][location.y].piece = new Queen(piece.isWhite);
                    break;
                case PieceName.Bishop:
                    this.chessBoard.board[location.x][location.y].piece = new Bishop(piece.isWhite);
                    break;
            }
        }
    }
}