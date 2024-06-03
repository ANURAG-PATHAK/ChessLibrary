/**
 * Class representing the event arguments for the game over event.
 * 
 * @class
 * @public
 */
export class GameOverEventArgs {
    /**
     * Indicates the winner of the game.
     * 
     * @type {boolean}
     */
    winner: boolean;

    /**
     * Creates a new instance of GameOverEventArgs.
     * 
     * @param {boolean} winner - The winner of the game.
     */
    constructor(winner: boolean) {
        this.winner = winner;
    }
}