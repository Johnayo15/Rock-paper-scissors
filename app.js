let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

let container = document.createElement("div");
container.textContent = "First to 5 wins in rock-paper-scissors";
document.body.appendChild(container);

let finalResultDiv = document.createElement("div");
let resultDiv = document.createElement("div");
let scoreDiv = document.createElement("div");
let humanChoiceDiv = document.createElement("div");
let computerChoiceDiv = document.createElement("div");

let playAgainBtn = document.createElement("button");
playAgainBtn.textContent = "RESTART";
playAgainBtn.style.display = "none";

container.append(
  finalResultDiv,
  resultDiv,
  humanChoiceDiv,
  computerChoiceDiv,
  scoreDiv,
  playAgainBtn,
);

let choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  let random = Math.floor(Math.random() * choices.length);
  return choices[random];
}

function playRound(computerChoice, humanChoice) {
  if (computerScore === 5 || humanScore === 5) {
    return;
  }
  humanChoiceDiv.textContent = `You chose: ${humanChoice} `;
  computerChoiceDiv.textContent = `Computer chose: ${computerChoice}`;

  let roundMessage = "";
  if (computerChoice === humanChoice) {
    roundMessage = `It is a tie! You both chose ${humanChoice}`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    roundMessage = `${humanChoice} beats ${computerChoice}. You win this round!`;
  } else {
    computerScore++;
    roundMessage = `${computerChoice} beats ${humanChoice}. Computer wins this round!`;
  }

  scoreDiv.textContent = `Current score: Human = ${humanScore} Computer = ${computerScore},`;

  roundsPlayed++;
  updateRoundMessage(roundMessage);
  if (humanScore >= 5 || computerScore >= 5) {
    endGame();
  }
}

function updateRoundMessage(message) {
  resultDiv.textContent = `Round ${roundsPlayed}: ${message}`;
}

function endGame() {
  if (humanScore > computerScore) {
    finalResultDiv.textContent = "Game over! You win";
  } else if (computerScore > humanScore) {
    finalResultDiv.textContent = "Game over! Computer wins";
  } else {
    finalResultDiv.textContent = "Game Over! It is a draw";
  }

  playAgainBtn.style.display = "inline-block";
}

choices.forEach(function (choice) {
  const button = document.createElement("button");
  button.textContent = choice.toLocaleUpperCase();
  button.addEventListener("click", function () {
    let computerChoice = getComputerChoice();
    playRound(computerChoice, choice);
  });
  container.appendChild(button);
});

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  roundsPlayed = 0;

  resultDiv.textContent = "";
  scoreDiv.textContent = "";
  humanChoiceDiv.textContent = "";
  computerChoiceDiv.textContent = "";
  finalResultDiv.textContent = "";
  playAgainBtn.style.display = "none";
}

playAgainBtn.addEventListener("click", () => resetGame());
