let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const cells = document.querySelectorAll('.cell');
const status = document.getElementById('status');
const restartBtn = document.getElementById('restartBtn');

// Handle cell clicks
cells.forEach((cell, index) => {
  cell.addEventListener('click', () => handleCellClick(index));
});

// Handle cell click function
function handleCellClick(index) {
  if (gameBoard[index] !== '' || !gameActive) return;

  gameBoard[index] = currentPlayer;
  cells[index].textContent = currentPlayer;

  checkWinner();
}

// Check if there's a winner or draw
function checkWinner() {
  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      gameActive = false;
      status.textContent = `Player ${currentPlayer} Wins!`;
      return;
    }
  }

  if (!gameBoard.includes('')) {
    gameActive = false;
    status.textContent = 'It\'s a Draw!';
  } else {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    status.textContent = `Player ${currentPlayer}'s Turn`;
  }
}

// Restart the game
restartBtn.addEventListener('click', () => {
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  gameActive = true;
  cells.forEach(cell => cell.textContent = '');
  status.textContent = `Player ${currentPlayer}'s Turn`;
});
