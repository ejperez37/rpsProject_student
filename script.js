function getComputerSelection() {
    // Create an array of choices
    const choices = ['rock', 'paper', 'scissors'];
  
    // Generate a random number between 0 and 2 (inclusive)
    const randomIndex = Math.floor(Math.random() * choices.length);
  
    // Use the random number to pick an element from the array
    const computerSelection = choices[randomIndex];
  
    // Return the selection
    return computerSelection;
  }

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("pick your fighter! rock, paper, scissors, SHOOT!", "you gotta shoot man");
    playerSelection = playerSelection.toLowerCase();
    computerSelection = getComputerSelection();
    // Compare playerSelection and computerSelection to determine the winner
    switch (playerSelection) {
        case "rock":
          if (computerSelection == "scissors") {
            return("You win!");
          } else if (computerSelection == "paper") {
            return("You lose!");
          } else {
            return("It's a tie!");
          }
        case "paper":
          if (computerSelection == "rock") {
            return("You win!");
          } else if (computerSelection == "scissors") {
            return("You lose!");
          } else {
            return("It's a tie!");
          }
        case "scissors":
          if (computerSelection == "paper") {
            return("You win!");
          } else if (computerSelection == "rock") {
            return("You lose!");
          } else {
            return("It's a tie!");
          }
        default:
          return("That's not a valid choice!");
      }
}
  // Create a function called game() that plays five rounds and keeps score
function game() {
    let playerScore = 0;
    let computerScore = 0;  
  // Create a loop that plays five rounds
    for (let i = 0; i < 5; i++) {
       switch (playRound()) {
        case "You win!":
          ++playerScore;
          console.log("You win! Player: " + playerScore + " Computer: " + computerScore);
          break;
        case "You lose!":
          ++computerScore;
          console.log("You lose! Player: " + playerScore + " Computer: " + computerScore);
          break;
        case "It's a tie!":
          console.log("You tied! No points awarded. Player: " + playerScore + " Computer: " + computerScore);
          break;
        default:
          console.log("That's not a valid choice! Try again.");
}
    }
// AFTER the loop ends, log the final scores and declare the winner
    if (playerScore > computerScore) {
      console.log("You win the game!");
    }
    else if (playerScore < computerScore) {
      console.log("You lose the game!");
    }
   else {
      console.log("It's a tie!");
    }
}