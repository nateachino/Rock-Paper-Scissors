let playerScore = 0;
let compScore = 0;
const playerScoreText = document.querySelector("#player");
const computerScoreText = document.querySelector("#comp");
const selected = document.querySelector("#selected");

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

function playRound(e) {
  let compChoice = getComputerChoice();
  let playerChoice = e.target.id;
  if (
    playerChoice == "rock" ||
    playerChoice == "paper" ||
    playerChoice == "scissors"
  ) {
    selected.textContent =
      "Computer chose " + compChoice + "! You chose " + playerChoice;
    if (playerChoice === compChoice) {
      selected.append("! Draw!");
    } else if (
      (playerChoice == "rock" && compChoice == "scissors") ||
      (playerChoice == "paper" && compChoice == "rock") ||
      (playerChoice == "scissors" && compChoice == "paper")
    ) {
      playerScore += 1;
      playerScoreText.textContent = "Player Score: " + playerScore;
      selected.append("! Player Wins!");
    } else if (
      (playerChoice == "rock" && compChoice == "paper") ||
      (playerChoice == "paper" && compChoice == "scissors") ||
      (playerChoice == "scissors" && compChoice == "rock")
    ) {
      compScore += 1;
      computerScoreText.textContent = "Computer Score: " + compScore;
      selected.append("! Computer Wins!");
    }
  }
  if (playerScore == 5) {
    selected.append(" Player wins the round");
    compScore = 0;
    playerScore = 0;
    playerScoreText.textContent = "Player Score: " + playerScore;
    computerScoreText.textContent = "Computer Score: " + compScore;
  } else if (compScore == 5) {
    selected.append(" Computer wins the round");
    compScore = 0;
    playerScore = 0;
    playerScoreText.textContent = "Player Score: " + playerScore;
    computerScoreText.textContent = "Computer Score: " + compScore;
  }
}

const buttons = document.querySelectorAll("button");
const scoreDiv = document.querySelector(".score");

buttons.forEach((button) => {
  button.addEventListener("click", playRound);
});
