const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const gameResultsDiv = document.querySelector('#game-results');
const playerScoreDiv = document.querySelector('#player-score');
const computerScoreDiv = document.querySelector('#computer-score');

let playerScore = 0;
let computerScore = 0;

rockButton.addEventListener('click', () => {
  playRound('rock');
});

paperButton.addEventListener('click', () => {
  playRound('paper');
});

scissorsButton.addEventListener('click', () => {
  playRound('scissors');
});

function playRound(playerSelection) {
  const computerSelection = computerPlay();

  if (playerSelection === computerSelection) {
    gameResultsDiv.textContent = `You both chose ${playerSelection}. It's a tie!`;
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    gameResultsDiv.textContent = `You chose ${playerSelection} and the computer chose ${computerSelection}. You win!`;
    playerScore++;
  } else {
    gameResultsDiv.textContent = `You chose ${playerSelection} and the computer chose ${computerSelection}. You lose!`;
    computerScore++;
  }

  updateScore();

  if (playerScore === 5 || computerScore === 5) {
    announceWinner();
    resetGame();
  }
}

function computerPlay() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function updateScore() {
  playerScoreDiv.textContent = `Player score: ${playerScore}`;
  computerScoreDiv.textContent = `Computer score: ${computerScore}`;
}

function announceWinner() {
  if (playerScore > computerScore) {
    gameResultsDiv.textContent = 'Congratulations, you win the game!';
  } else if (computerScore > playerScore) {
    gameResultsDiv.textContent = 'Sorry, you lose the game. Better luck next time!';
  } else {
    gameResultsDiv.textContent = "It's a tie game!";
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  updateScore();
}

