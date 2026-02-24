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

// Declare variables to store scores
let humanScore = 0;
let computerScore = 0;
