# Chess Library

A MultiPlayer Chess Library designed and implemented in TypeScript.

## Overview

This library provides a comprehensive implementation of a multiplayer chess game. It includes all the necessary components to start, save, and load chess games, as well as handle the movements and behaviors of different chess pieces.

## Features

- **Chess Game Management**: Start new games, save game states, and load saved games.
- **Chessboard Representation**: A detailed representation of the chessboard and its cells.
- **Piece Behaviors**: Implementations of the unique movements and behaviors of all chess pieces (King, Queen, Rook, Bishop, Knight, Pawn).
- **Event Handling**: Manage game events such as piece movements and game-over conditions.

## Technical Skills

- **TypeScript**: The entire library is written in TypeScript, leveraging its strong typing and modern JavaScript features.
- **Object-Oriented Programming**: The library is designed using OOP principles, with classes representing the game, board, cells, and pieces.
- **File Operations**: Save and load game states using file operations.
- **Event-Driven Architecture**: Handle game events through custom event arguments and handlers.

## Installation

To install the library, use npm:

```bash
npm install @anurag-pathak/chess
```

## Usage

Here is an example of how to use the library:

```typescript
import { ChessGame } from '@anurag-pathak/chess';

const game = new ChessGame();
game.startNewGame();
game.saveGame('gameState.json');

const loadedGame = new ChessGame();
loadedGame.loadGame('gameState.json');
```
