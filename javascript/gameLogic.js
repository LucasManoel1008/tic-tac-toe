import { gameAlert } from './utils.js';
import { GameBoard } from './gameBoard.js';

export const GameLogic = {
    currentPlayer: 'X',
    gameOver: false,
    
    checkWinner() {
        
        // empate
       
        
        for (let i = 0; i < 3; i++) {
            // Linhas
            if (GameBoard.board[i][0] === GameBoard.board[i][1] && 
                GameBoard.board[i][0] === GameBoard.board[i][2] && 
                GameBoard.board[i][0] !== '') {
                this.gameOver = true;
                gameAlert(`Player ${this.currentPlayer} wins!`, 
                         `Player ${this.currentPlayer} has won by completing row ${i + 1}.`);
                return;
            }
            
            // Colunas
            if (GameBoard.board[0][i] === GameBoard.board[1][i] && 
                GameBoard.board[0][i] === GameBoard.board[2][i] && 
                GameBoard.board[0][i] !== '') {
                this.gameOver = true;
                gameAlert(`Player ${this.currentPlayer} wins!`, 
                         `Player ${this.currentPlayer} has won by completing column ${i + 1}.`);
                return;
            }
        }
        
        // Diagonais
        if (GameBoard.board[0][0] === GameBoard.board[1][1] && 
            GameBoard.board[0][0] === GameBoard.board[2][2] && 
            GameBoard.board[0][0] !== '') {
            this.gameOver = true;
            gameAlert(`Player ${this.currentPlayer} wins!`, 
                     `Player ${this.currentPlayer} has won by completing the main diagonal.`);
            return;
        }
        
        if (GameBoard.board[0][2] === GameBoard.board[1][1] && 
            GameBoard.board[0][2] === GameBoard.board[2][0] && 
            GameBoard.board[0][2] !== '') {
            this.gameOver = true;
            gameAlert(`Player ${this.currentPlayer} wins!`, 
                     `Player ${this.currentPlayer} has won by completing the secondary diagonal.`);
            return;
        }
         if (GameBoard.board.every(row => row.every(cell => cell !== ''))) {
            gameAlert('Game Over', 'It\'s a draw! No more moves left.');
            this.gameOver = true;
            return;
        }
    },
    
    switchPlayer() {
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    },
    
    isGameOver() {
        return this.gameOver;
    },
    
    resetGame() {
        this.currentPlayer = 'X';
        this.gameOver = false;
    }
};