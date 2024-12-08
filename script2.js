// Start game scores at zone, set number of rounds
let computerScore = 0;
let userScore = 0;
const rounds = 5;
// Get computer choice using random numbers 
function computerChoice(){
    const choices = ["Rock", "Paper", "Scissor"];
    return choices[Math.floor(Math.random() * 3)];
}

console.log(computerChoice());

// Promt user for input and change to lower case
function userChoice(){
    return window.prompt("Enter rock, paper or scissors").toLowerCase();

}

console.log(userChoice());


// Set rules to play one round
function playRound (userChoice, computerChoice){
    if ((userChoice === 'rock' && computerChoice === "scissors") ||
        (userChoice === 'paper' && computerChoice === "rock") ||
        (userChoice === 'scissors' && computerChoice === "paper")
    ) {
        userScore++;
        return `${userChoice} beats ${computerChoice}! You win this round!`;
    } else if (userChoice === computerChoice){
        return `User chose ${userChoice} and computer chose ${computerChoice}! It's a Tie!`;
    } else {
        return `${computerChoice} beats ${userChoice}! Computer Wins!`;
    }
} 

console.log(playRound());







// Set rules to play 5 rounds





