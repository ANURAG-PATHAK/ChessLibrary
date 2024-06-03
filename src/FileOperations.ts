import * as fs from 'fs';
import { GameStateInformation } from './GameStateInformation';

/**
 * Class providing static methods for file operations.
 * 
 * @class
 * @public
 */
export class FileOperations {
    /**
     * Deletes a file if it exists.
     *
     * @static
     * @param {string} file - The path to the file to be deleted.
     */
    static eraseFile(file: string): void {
        if (fs.existsSync(file)) {
            fs.unlinkSync(file);
        }
    }

    /**
     * Reads a file and returns its content as a GameStateInformation object.
     *
     * @static
     * @param {string} file - The path to the file to be read.
     * @returns {GameStateInformation} - The content of the file as a GameStateInformation object.
     */
    static readFile(file: string): GameStateInformation {
        let gameState = new GameStateInformation();
        if (fs.existsSync(file)) {
            const data = fs.readFileSync(file, 'utf8');
            gameState = JSON.parse(data);
        }
        return gameState;
    }

    /**
     * Writes a GameStateInformation object to a file.
     *
     * @static
     * @param {string} file - The path to the file to be written.
     * @param {GameStateInformation} gameState - The GameStateInformation object to be written to the file.
     */
    static writeFile(file: string, gameState: GameStateInformation): void {
        const jsonString = JSON.stringify(gameState);
        fs.writeFileSync(file, jsonString);
    }

    /**
     * Checks if a file exists.
     * @static
     * @param {string} file - The path to the file to be checked.
     * @returns {boolean} - True if the file exists, false otherwise.
     */
    static fileExists(file: string): boolean {
        return fs.existsSync(file);
    }
}