let getComputerChoice = () => ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];

let humanScore = 0, computerScore = 0, round = 0;

function playRound(humanChoice, computerChoice) {
    console.log("human picked " + humanChoice);
    console.log("computer picked " + computerChoice);

        if (round >= 5){
            score.textContent = "Game is now over!"
            if(humanScore > computerScore){
                roundWinner.textContent = "Human won!" ;
            } else if(computerScore > humanScore){
                roundWinner.textContent = "computer won!";
            } else{
                roundWinner.textContent = "It's a tie!";

            }
            return;
        }

        if(humanChoice === "rock" && computerChoice === "rock" || 
            humanChoice === "scissors" && computerChoice === "scissors" ||
            humanChoice === "paper" && computerChoice === "paper") {
            roundWinner.textContent = "It's a tie!";
        } else if(humanChoice === "rock" && computerChoice === "scissors" ||
            humanChoice === "paper" && computerChoice === "rock" ||
            humanChoice === "scissors" && computerChoice === "paper") {
                roundWinner.textContent = "Human won!";
                humanScore++;
            } else{
                roundWinner.textContent = "Computer won!";
                computerScore++;
            }
    round++

}

    /*for(let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log("Score is now " + humanScore + " to " + computerScore);
        } */
   const div = document.createElement("div");
   const score = document.createElement("span");
   const roundWinner = document.createElement("span");

   document.firstElementChild.lastElementChild.appendChild(div);
   div.appendChild(score);
   div.appendChild(roundWinner);

   const btn = document.querySelectorAll('button');
   btn.forEach(button => {
       button.addEventListener("click", (e) => {
           playRound(e.target.className, getComputerChoice());
           if(round < 5){
               score.textContent = "Score is now " + humanScore + " to " + computerScore + " ";
           }
       });
   })

   





