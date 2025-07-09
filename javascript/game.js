import { GameBoard } from './gameBoard.js';
import { GameLogic } from './gameLogic.js';
import { GameUI } from './gameUi.js';

window.onload = function() {
    initializeGame();
};

function initializeGame() {
    createBoard();
    GameUI.addCellsListener();
    runGame();
}

function createBoard() {
    GameBoard.createBoard();
}

function runGame() {
    if (GameLogic.isGameOver()) return;
}

function resetGame() {
    GameBoard.createBoard();
    GameLogic.resetGame();
    GameUI.updatePlayerDisplay();
    runGame();
}


window.resetGame = resetGame;