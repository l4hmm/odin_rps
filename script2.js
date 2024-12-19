const rockBtn = document.querySelector("#rockButton");
const paperBtn = document.querySelector("#paperButton");
const scissorBtn = document.querySelector("#scissorButton");
const newGameBtn = document.querySelector("#newButton")

const choicesDisplay = document.querySelector("#choices");
const resultsDisplay = document.querySelector("#results");
const scoresDisplay = document.querySelector("#scores");

let userScore = 0; // Scores start at 0
let computerScore = 0;

function computerChoice(){ // get Computer choice using random number
    const choices = ["Rock", "Paper", "Scissors"]; // Provides possible computer choices
    return choices[Math.floor(Math.random() * 3)]; // Choses choice based on random number
}

function playRound(userChoice, computerChoice){
    if (
        (userChoice === "Rock" && computerChoice === "Scissors") ||   // Logic of game
        (userChoice === "Paper" && computerChoice === "Rock") ||
        (userChoice === "Scissors" && computerChoice === "Paper")
    ) {
        userScore++;  // Adds 1 point to user score 
        return `User wins! ${userChoice} beats ${computerChoice}.`;
    } else if (userChoice === computerChoice) {
            return "It's a Tie!";
    } else {
        computerScore++;
        return `Computer wins! ${computerChoice} beats ${userChoice}.`;
    }
}

rockBtn.onclick = () => {
    userChoice = "Rock";
    const computerInput = computerChoice();
    const roundResult = playRound(userChoice, computerInput);

    // Update choices
    document.querySelector("#yourChoice").textContent = userChoice;
    document.querySelector("#computerChoice").textContent = computerInput;

    // Update result
    document.querySelector("#resultText").textContent = roundResult;

    // Update scores
    document.querySelector("#yourScore").textContent = userScore;
    document.querySelector("#computerScore").textContent = computerScore;
};
    
paperBtn.onclick = () => {
    const userChoice = "Paper";
    const computerInput = computerChoice();
    const roundResult = playRound(userChoice, computerInput);

    // Update choices
    document.querySelector("#yourChoice").textContent = userChoice;
    document.querySelector("#computerChoice").textContent = computerInput;

    // Update result
    document.querySelector("#resultText").textContent = roundResult;

    // Update scores
    document.querySelector("#yourScore").textContent = userScore;
    document.querySelector("#computerScore").textContent = computerScore;
};

    
scissorBtn.onclick = () => {
    userChoice = "Scissors";
    const computerInput = computerChoice();
    const roundResult = playRound(userChoice, computerInput);

    // Update choices display
    document.querySelector("#yourChoice").textContent = userChoice;
    document.querySelector("#computerChoice").textContent = computerInput;

    // Update result display
    document.querySelector("#resultText").textContent = roundResult;

    // Update scores display
    document.querySelector("#yourScore").textContent = userScore;
    document.querySelector("#computerScore").textContent = computerScore;
};

newGameBtn.onclick = () => {
    userScore = 0;
    computerScore = 0;

    // Reset choices display
    document.querySelector("#yourChoice").textContent = "None";
    document.querySelector("#computerChoice").textContent = "None";

    // Reset result display
    document.querySelector("#resultText").textContent = "Play the game to see results!";

    // Reset scores display
    document.querySelector("#yourScore").textContent = "0";
    document.querySelector("#computerScore").textContent = "0";
};