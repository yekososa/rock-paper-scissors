function getComputerChoice() {
  // get number 0-2
  let val = Math.floor(Math.random() * 3);

  if (val == 0) {
    return "rock";
  } else if (val == 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

let humanScore = 0;
let computerScore = 0;

function playGame() {
  if (humanScore >= 5 || computerScore >= 5) {
    if (humanScore > computerScore) {
      console.log("You've beat that filthy clanker!");
    } else if (computerScore < humanScore) {
      console.log("Succumb to your master");
    } else {
      console.log("Tie game!");
    }
  }
}

let buttons = document.querySelectorAll("button");
buttons.forEach((b) => {
  b.addEventListener("click", function (event) {
    let humanChoice = event.target.textContent;
    let computerChoice = getComputerChoice();

    let compDiv = document.querySelector(".computer");
    let playerDiv = document.querySelector(".player");
    let resultDiv = document.querySelector(".result");
    let pScore = document.querySelector(".playerScore");
    let cpuScore = document.querySelector(".cpuScore");

    compDiv.textContent = `Computer chose: ${computerChoice}`;
    playerDiv.textContent = `Player chose: ${humanChoice}`;

    if (humanChoice === "paper") {
      if (computerChoice === "rock") {
        resultDiv.textContent = "You win!";
        humanScore++;
      } else if (computerChoice === "paper") {
        resultDiv.textContent = "Tie!";
      } else {
        //scissors
        resultDiv.textContent = "You Lose!";

        computerScore++;
      }
    } else if (humanChoice === "rock") {
      if (computerChoice === "rock") {
        resultDiv.textContent = "Tie!";
      } else if (computerChoice === "paper") {
        resultDiv.textContent = "You Lose!";
        computerScore++;
      } else {
        //scissors
        resultDiv.textContent = "You win!";
        humanScore++;
      }
    } else {
      //scissors
      if (computerChoice === "rock") {
        resultDiv.textContent = "You Lose!";
        computerScore++;
      } else if (computerChoice === "paper") {
        resultDiv.textContent = "You win!";
        humanScore++;
      } else {
        resultDiv.textContent = "Tie!";
      }
    }

    cpuScore.textContent = `Computer Score: ${computerScore}`
    pScore.textContent = `Player Score: ${humanScore}`
    playGame();
  });
});
