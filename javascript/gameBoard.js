import { getRow, getCol } from './utils.js';

export const GameBoard = {
    board: [],
    
    createBoard() {
        this.board = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ];
        this.clearVisualBoard();
    },
    
    clearVisualBoard() {
        document.querySelectorAll('.cell').forEach((cell) => {
            cell.textContent = '';
            cell.classList.remove('X', 'O');
        });
    },
    
    markBoard(row, col, player) {
        if (this.board[row][col] === '') {
            this.board[row][col] = player;
            return true;
        }
        return false;
    },
    
    isCellEmpty(index) {
        const row = getRow(index);
        const col = getCol(index);
        return this.board[row][col] === '';
    }
};