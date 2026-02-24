function playGame() {
  // Declare variables to store scores
  let humanScore = 0;
  let computerScore = 0;

  // Function to get valid human input
  function getHumanChoice() {
    while (true) {
      let input = prompt("Enter rock, paper, or scissors:");

      // If user presses Cancel
      if (input === null) {
        console.log("Game cancelled.");
        return null;
      }

      // Convert input to lowercase and remove spaces
      input = input.toLowerCase().trim();

      // Check if input is valid
      if (input === "rock" || input === "paper" || input === "scissors") {
        return input;
      }

      // If invalid, ask again
      console.log("Invalid choice. Please try again.");
    }
  }

  // Function to generate computer choice
  function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
      return "rock";
    } else if (randomNumber === 1) {
      return "paper";
    } else {
      return "scissors";
    }
  }

  // Function to play one round
  function playRound(humanChoice, computerChoice) {
    console.log("You chose:", humanChoice);
    console.log("Computer chose:", computerChoice);

    if (humanChoice === computerChoice) {
      console.log("It's a tie.");
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      console.log("You win this round.");
    } else {
      computerScore++;
      console.log("Computer wins this round.");
    }

    console.log(
      "Current score: Human =",
      humanScore,
      "Computer =",
      computerScore,
    );
    console.log("----------------------------");
  }

  // Loop to play 5 rounds
  for (let round = 1; round <= 5; round++) {
    console.log("Round", round);

    let humanChoice = getHumanChoice();

    // Stop game if user cancelled
    if (humanChoice === null) {
      return;
    }

    let computerChoice = getComputerChoice();

    playRound(humanChoice, computerChoice);
  }

  // Show final result
  console.log("Final Score:");
  console.log("Human:", humanScore);
  console.log("Computer:", computerScore);

  if (humanScore > computerScore) {
    console.log("You win the game!");
  } else if (computerScore > humanScore) {
    console.log("Computer wins the game!");
  } else {
    console.log("The game is a tie!");
  }
}
