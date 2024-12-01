
let userScore = 0; // Scores start at 0
let computerScore = 0;
const rounds = 5; // Total number of rounds 


function getComputerChoice(){ // get Computer choice using random number
    const choices = ["rock", "paper", "scissors"]; // Provides possible computer choices
    return choices[Math.floor(Math.random() * 3)]; // Choses choice based on random number
}

// Get user choice
function getUserChoice (){ 
    return window.prompt("Choose Rock, Paper or Scissors").toLowerCase(); // Prompts user of input and changes input to lower case.
}

// Play one round
function playRound(userChoice, computerChoice){
    if (
        (userChoice === "rock" && computerChoice === "scissors") ||   // Logic of game
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
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

// Logic to play 5 rounds
function playGame() {
    // Starts rounds at 0 and iterates until 5 rounds are played 
    for(let i = 0; i < rounds; i++) {
        console.log(`Round ${i + 1}:`); // Shows round number 

        const user = getUserChoice();  //Stores users choice for current round in user
        const computer = getComputerChoice(); //Stores computers choice for current round in computer

        console.log(`User chose: ${user}, Computer chose: ${computer}.`);
        const result = playRound(user, computer);  // Runs round input through game logic of playRound() and returns result
        console.log(`Current Score -> User: ${userScore}, Computer: ${computerScore}.`);
    }

    console.log(`Final scores: user: ${userScore}, Computer: ${computerScore}.`); //Prints final score after 5 rounds
    if (userScore > computerScore){  // Prints winner of 5 rounds using else if 
        console.log("Congratulations! You are the winner!");
        } else if (computerScore > userScore) {
            console.log("Computer wins this time!");
    } else {
        console.log("It's an overall tie!");
    }
}


playGame(); // Starts the game



