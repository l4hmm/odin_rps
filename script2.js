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
    
    choicesDisplay.textContent = `Your Choice: ${userChoice} | Computer Choice: ${computerInput}`;
    const roundResult = playRound(userChoice, computerInput);
    resultsDisplay.textContent = `Result: ${roundResult}`;
    scoresDisplay.textContent =`Your Score: ${userScore} | Computer Score: ${computerScore}`;
};
    
paperBtn.onclick = () => {
    userChoice = "Paper";
    const computerInput = computerChoice();

    choicesDisplay.textContent = `Your Choice: ${userChoice} | Computer Choice: ${computerInput}`;
    const roundResult = playRound(userChoice, computerInput);
    resultsDisplay.textContent = `Result: ${roundResult}`;
    scoresDisplay.textContent =`Your Score: ${userScore} | Computer Score: ${computerScore}`;
};
    
scissorBtn.onclick = () => {
    userChoice = "Scissor";
    const computerInput = computerChoice();
    
    choicesDisplay.textContent = `Your Choice: ${userChoice} | Computer Choice: ${computerInput}`;
    const roundResult = playRound(userChoice, computerInput);
    resultsDisplay.textContent = `Result: ${roundResult}`;
    scoresDisplay.textContent =`Your Score: ${userScore} | Computer Score: ${computerScore}`;
};

newGameBtn.onclick = () => {
    userScore = 0;
    computerScore = 0;
    choicesDisplay.textContent = `our Choice: None | Computers Choice: None`;
    resultsDisplay.textContent = `Result: Play the game to see results!`;
    scoresDisplay.textContent = `Your Score: 0 | Computers Score: 0`;
}