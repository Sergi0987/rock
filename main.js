
let getComputerChoice = () => ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];

let getHumanChoice = () => prompt("Rock, paper, or scissors?");

let humanScore = 0, computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    console.log(humanChoice);
    console.log(computerChoice);

    if(humanChoice === "rock" && computerChoice === "rock" || 
        humanChoice === "scissors" && computerChoice === "scissors" ||
        humanChoice === "paper" && computerChoice === "scissors") {
        console.log("It's a tie!") 
    } else if(humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper") {
            console.log("Human wins!");
            humanScore++;
        } else{
            console.log("Computer wins!");
            computerScore++;
        }
}

function playGame() {
    for(let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log("Score is now " + humanScore + " to " + computerScore);
    }
    console.log("Game is now over.");
    if(humanScore > computerScore){
        console.log("Human won!");
    } else if(computerScore > humanScore){
        console.log("Computer won!");
    } else{
        console.log("It's a tie!");
    }
}

playGame();





