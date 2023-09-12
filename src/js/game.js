import defaultCharacter from './domain.js';

class Game {
    start() {
        console.log('game started');
    }
}

class GameSavingData {
    
}

function readGameSaving() {
    
}

function writeGameSaving() {
    
}

const defaultGame = new Game();
const classGameSavingData = new GameSavingData();
const loadGame = readGameSaving();
const saveGame = writeGameSaving();
export default defaultGame;
export { classGameSavingData, loadGame, saveGame };