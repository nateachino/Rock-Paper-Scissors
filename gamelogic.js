function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3);
  if (choice == 1) {
    return "rock";
  } else if (choice == 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound() {
  let compChoice = getComputerChoice();
  let playerChoice = prompt("Rock, Paper, or Scissors: ");

  playerChoice = playerChoice.toLowerCase();
  if (
    playerChoice == "rock" ||
    playerChoice == "paper" ||
    playerChoice == "scissors"
  ) {
    if (playerChoice == compChoice) {
      return 1;
    } else if (
      (playerChoice == "rock" && compChoice == "scissors") ||
      (playerChoice == "paper" && compChoice == "rock") ||
      (playerChoice == "scissors" && compChoice == "paper")
    ) {
      return 2;
    } else if (
      (playerChoice == "rock" && compChoice == "paper") ||
      (playerChoice == "paper" && compChoice == "scissors") ||
      (playerChoice == "scissors" && compChoice == "rock")
    ) {
      return 3;
    }
  }
}

function game() {
  let compScore = 0;
  let playerScore = 0;
  for (let i = 0; i < 5; i++) {
    let winner = playRound();
    if (winner == 1) {
      return;
    } else if (winner == 2) {
      playerScore += 1;
    } else if (winner == 3) {
      compScore += 1;
    }
  }

  console.log(playerScore);
  if (compScore > playerScore) {
    console.log("Computer Wins");
  } else if (playerScore > compScore) {
    console.log("Player Wins");
  } else if (playerScore == compScore) {
    console.log("Tie");
  }
}

game();
