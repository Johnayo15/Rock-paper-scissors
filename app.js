let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
let totalRounds = 5;

let container = document.createElement("div");
container.textContent = "Results: ";
document.body.appendChild(container);

let finalResultDiv = document.createElement("div");
container.appendChild(finalResultDiv);

let ScoreDiv = document.createElement("div");
container.appendChild(ScoreDiv);

let resultDiv = document.createElement("div");
container.appendChild(resultDiv);

let playAgainBtn = document.createElement("button");
playAgainBtn.textContent = "Reset";
playAgainBtn.style.display = "none";
container.appendChild(playAgainBtn);

let choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  let random = Math.floor(Math.random() * choices.length);
  return choices[random];
}

function playRound(ComputerChoice, humanChoice) {
  if (roundsPlayed >= totalRounds) return; // Stop if game is over
  let roundMessage = "";
  if (ComputerChoice === humanChoice) {
    roundMessage = `It is a tie! You both chose ${humanChoice}`;
  } else if (
    (humanChoice === "rock" && ComputerChoice === "scissors") ||
    (humanChoice === "paper" && ComputerChoice === "rock") ||
    (humanChoice === "scissors" && ComputerChoice === "paper")
  ) {
    humanScore++;
    roundMessage = `${humanChoice} beats ${ComputerChoice}. You win this round!`;

    //resultDiv.textContent = "You win";
  } else {
    computerScore++;
    roundMessage = `${ComputerChoice} beats ${humanChoice}. Computer wins this round!`;
    //resultDiv.textContent = "computer wins";
  }

  roundsPlayed++;
  updateRoundMessage(roundMessage);
  if (roundsPlayed === totalRounds) {
    endGame();
  }
}

function updateRoundMessage(message) {
  resultDiv.textContent = `Round ${roundsPlayed}: ${message}`;
  ScoreDiv.textContent = `Score: Player ${humanScore} - Computer ${computerScore}`;
}

function endGame() {
  if (humanScore > computerScore) {
    finalResultDiv.textContent = "Game over! You win";
  } else if (computerScore > humanScore) {
    finalResultDiv.textContent = "Game over! Computer wins";
  } else {
    finalResultDiv.textContent = "Game Over! it is a draw";
  }

  playAgainBtn.style.display = "inline-block";
}

choices.forEach(function (choice) {
  const button = document.createElement("button");
  button.textContent = choice;
  button.addEventListener("click", function () {
    let ComputerChoice = getComputerChoice();
    playRound(ComputerChoice, choice);
  });
  container.appendChild(button);
});

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  roundsPlayed = 0;

  resultDiv.textContent = "";
  ScoreDiv.textContent = "";
  finalResultDiv.textContent = "";
  playAgainBtn.style.display = "none";
}

playAgainBtn.addEventListener("click", () => resetGame());
