let gameBoard;
let currentPlayer;
let gameOver;

window.onload = function() {
    initializeGame();    
}


function startGame() {    
    let cells = document.querySelectorAll('.cell');  
    if(gameOver){
        alert('Game is already over. Please refresh the page to start a new game.');
        return;
    }    
    cells.forEach((cell, index) =>{
        cell.textContent = '';
        cell.addEventListener('click', () => {
            playOnBoard(index, cells);
        });
    })

}
function playOnBoard(index, cells) {
        if (gameOver) return;
        let row = Math.floor(index / 3);
        let col = index % 3;
        
        if (gameBoard[row][col] === '') {
            gameBoard[row][col] = currentPlayer;
            cells[index].textContent = currentPlayer;            
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
        checkWinner();

    }
    function checkWinner(){
        if(gameBoard.every(row => row.every(cell => cell !== ''))) {
            alert('It\'s a draw!');
            gameOver = true;
            return;
        }
        for (let i = 0; i < 3; i++) {
            // checar Linhas
            if(gameBoard[i][0] == gameBoard[i][1] && gameBoard[i][0] == gameBoard[i][2] && gameBoard[i][0] != '') {
                gameOver = true;                
                alert(`Player ${gameBoard[i][0]} wins!`);
                return;
            }
            // checar Colunas
            if(gameBoard[0][i] == gameBoard[1][i] && gameBoard[0][i] == gameBoard[2][i] && gameBoard[0][i] != '') {
                gameOver = true;                
                alert(`Player ${gameBoard[i][0]} wins!`);
                return;
            }                        
        }
        // checar Diagonais
        if(gameBoard[0][0] == gameBoard[1][1] && gameBoard[0][0] == gameBoard[2][2] && gameBoard[0][0] != ''){
            gameOver = true;            
            alert(`Player ${gameBoard[0][0]} wins!`);
            return;
        }
        if(gameBoard[0][2] == gameBoard[1][1] && gameBoard[0][2] == gameBoard[2][0] && gameBoard[0][2] != ''){
            gameOver = true;            
            alert(`Player ${gameBoard[0][2]} wins!`);
            return;
        }
    }

function initializeGame() {
    gameBoard = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    currentPlayer = 'X';
    gameOver = false;
    let cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.textContent = '';        
    });

    startGame();
}