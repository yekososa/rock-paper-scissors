
function getHumanChoice() {
    return prompt("Enter a choice: ").toLowerCase();
}

function getComputerChoice() {
    // get number 0-2
    let val = Math.floor(Math.random()*3); 

    if (val == 0) {
        return "rock";
    } else if (val == 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            console.log("You win!");    
            humanScore++;
        } else if (computerChoice === "paper") {
              console.log("Tie!");
        } else {
        //scissors
           console.log("You lose!");
            computerScore++;
        }
    } else if (humanChoice === "rock") {
        if (computerChoice === "rock") {
           console.log("Tie!");
        } else if (computerChoice === "paper") {
            console.log("You lose!");
            computerScore++;
        } else {
        //scissors
            console.log("You win!");    
            humanScore++;
        }
    } else {
        //scissors
        if (computerChoice === "rock") {
            console.log("You lose!");
            computerScore++;
        } else if (computerChoice === "paper") {
            console.log("You win!");    
            humanScore++;
        } else {
            console.log("Tie!");
        }
    
    } 
}

 let humanScore = 0;
 let computerScore = 0;

function playGame() {

    let humanChoice;
    let computerChoice;

    for(let i = 0; i < 5; i++) {
        computerChoice = getComputerChoice();
        humanChoice = getHumanChoice();

        playRound(humanChoice, computerChoice);
    }

    if (humanScore > computerScore) {
        console.log("You've beat that filthy clanker!");
    } else if (computerScore < humanScore) {
        console.log("Succumb to your master");
    } else {
        console.log("Tie game!");
    }
}

playGame();
