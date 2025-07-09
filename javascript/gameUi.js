import { GameLogic } from './gameLogic.js';
import { GameBoard } from './gameBoard.js';
import { getRow, getCol, gameAlert } from './utils.js';

export const GameUI = {
    addCellsListener() {
        const cells = document.querySelectorAll('.cell');
        cells.forEach((cell, index) => {
            cell.addEventListener('click', () => {
                this.playOnBoard(index, cells);
            });
        });
    },
    
    playOnBoard(index, cells) {
        if (GameLogic.isGameOver()) return;
        
        const row = getRow(index);
        const col = getCol(index);
        
        if (GameBoard.markBoard(row, col, GameLogic.currentPlayer)) {
            this.setCellValue(cells, index);
        } else {
            gameAlert('Invalid Move', 'This cell is already occupied. Please choose another cell.');
        }
    },
    
    setCellValue(cells, index) {
        GameLogic.checkWinner();
        cells[index].textContent = GameLogic.currentPlayer;
        cells[index].classList.add(GameLogic.currentPlayer);
        
        GameLogic.switchPlayer();
        this.updatePlayerDisplay();
    },
    
    updatePlayerDisplay() {
        const playerDisplay = document.getElementById('playerTime');
        if (playerDisplay) {
            playerDisplay.textContent = `Current Player: ${GameLogic.currentPlayer}`;
        }
    }
};