function getComputerSelection() {
    // Step 1: Create an array of choices
    const choices = ['rock', 'paper', 'scissors'];
  
    // Step 2: Generate a random number between 0 and 2 (inclusive)
    const randomIndex = Math.floor(Math.random() * choices.length);
  
    // Step 3: Use the random number to pick an element from the array
    const computerSelection = choices[randomIndex];
  
    // Step 4: Return the selection
    return computerSelection;
  }

function playRound(playerSelection, computerSelection) {
    // Step 1: Get playerSelection via prompt
    playerSelection = prompt("pick your fighter! rock, paper, scissors, SHOOT!", "you gotta shoot man");
    // Step 2: Make sure playerSelection is lowercase
    playerSelection = playerSelection.toLowerCase();
    // Step 3: Get computerSelection via getComputerSelection()
    computerSelection = getComputerSelection();
    // Step 4: Compare playerSelection and computerSelection
    if (playerSelection === computerSelection) {
        console.log("It's a tie!");
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log("You win! Rock beats Scissors!");
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        console.log("You lose! Paper beats Rock!");
    } 
    else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("You win! Paper beats Rock!");
    } 
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        console.log("You lose! Scissors beats Paper!");
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log("You win! Scissors beats Paper!");
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        console.log("You lose! Rock beats Scissors!");
    }
    else {
        console.log("That's not a valid choice!");
    }
  }


  
  

