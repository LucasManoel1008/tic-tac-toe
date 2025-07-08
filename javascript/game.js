    const Game = {
    gameBoard: [],
    currentPlayer: 'X',
    gameOver: false,
    }
    window.onload = function() {
        initializeGame(); 
    }

    function initializeGame() {        
        createBoard(); 
        addCellsListener();
        runGame();
    }

    function runGame() { 

        if (isGameOver()) return endGame();        
        
    }

    function playOnBoard(index, cells) {

            if(isGameOver()) return endGame();        
            let row = getRow(index);
            let col = getCol(index)        
            markBoard(row, col);
            setCellValue(cells, index);
            checkWinner();

        }
        function checkWinner(){
            if(Game.gameBoard.every(row => row.every(cell => cell !== ''))) {
                alert('It\'s a draw!');
                Game.gameOver = true;
                return;
            }
            for (let i = 0; i < 3; i++) {
                // checar Linhas
                if(Game.gameBoard[i][0] == Game.gameBoard[i][1] && Game.gameBoard[i][0] == Game.gameBoard[i][2] && Game.gameBoard[i][0] != '') {
                    Game.gameOver = true;                
                    alert(`Player ${Game.gameBoard[i][0]} wins!`);
                    return;
                }
                // checar Colunas
                if(Game.gameBoard[0][i] == Game.gameBoard[1][i] && Game.gameBoard[0][i] == Game.gameBoard[2][i] && Game.gameBoard[0][i] != '') {
                    Game.gameOver = true;                
                    alert(`Player ${Game.gameBoard[i][0]} wins!`);
                    return;
                }                        
            }
            // checar Diagonais
            if(Game.gameBoard[0][0] == Game.gameBoard[1][1] && Game.gameBoard[0][0] == Game.gameBoard[2][2] && Game.gameBoard[0][0] != ''){
                Game.gameOver = true;            
                alert(`Player ${Game.gameBoard[0][0]} wins!`);
                return;
            }
            if(Game.gameBoard[0][2] == Game.gameBoard[1][1] && Game.gameBoard[0][2] == Game.gameBoard[2][0] && Game.gameBoard[0][2] != ''){
                Game.gameOver = true;            
                alert(`Player ${Game.gameBoard[0][2]} wins!`);
                return;
            }
        }


        function isGameOver() {
            return Game.gameOver;
        }

        function createBoard(){
            Game.gameBoard = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
            ];
            document.querySelectorAll('.cell')
            .forEach((cell) => {
                cell.textContent = '';       
                cell.classList.remove('X', 'O'); 
            });

        }
        function addCellsListener() {
            let cells = document.querySelectorAll('.cell');
            cells.forEach((cell, index) => {
                cell.addEventListener('click', () => {
                    playOnBoard(index, cells);
                });
            });
        }

        function endGame(){
            return;
        }
        function getCol(index){
            return index % 3;
        }
        function getRow(index){
            return Math.floor(index / 3);
        }
        function resetGame() {
            createBoard();
            Game.currentPlayer = 'X';
            Game.gameOver = false;
            runGame();
        }
        function markBoard(row, col) {
            if(Game.gameBoard[row][col] === ''){
                Game.gameBoard[row][col] = Game.currentPlayer;                       
                return true;
            }
            return false;
        }
        function setCellValue(cells,index){
            cells[index].textContent = Game.currentPlayer;
            Game.currentPlayer = Game.currentPlayer === 'X' ? 'O' : 'X'; 
        }