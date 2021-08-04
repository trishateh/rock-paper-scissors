
const options = document.querySelectorAll(".options");
let playerScore = 0;
let computerScore = 0;

options.forEach((option) => {
    option.addEventListener("click", function() {
        const playerSelection = this.textContent;
        const compOptions = ["Rock", "Paper", "Scissors"];
        const computerSelection = compOptions[Math.floor(Math.random()*compOptions.length)];
    
        playRound(playerSelection, computerSelection);
        updateScore();
        if (checkWinner()) {
            playerScore = computerScore = 0;
            updateScore();
        }
    });
});

function playRound(playerSelection, computerSelection) {
  
    if (playerSelection === computerSelection) {
        alert("Its a tie");
        return;
    }

    else if (playerSelection === "Rock") {
        if (computerSelection === "Paper") {
            alert("Computer wins! Paper beats rock");
        computerScore++; }
        else {
            alert("You win!");
            playerScore++; 
        }
        
    } 
    else if (playerSelection === "Paper") {
        if (computerSelection === "Scissors") {
            alert("Computer wins! Scissors beats paper");
            computerScore++ ;
        }
        else {
            alert("You win!");
            playerScore++;
        }
    }
    else if (playerSelection === "Scissors") {
        if (computerSelection === "Rock") {
            alert("Computer wins! Rock beats scissors");
            computerScore++; }
        else {
            alert("You win!");
            playerScore++;
        }
    }
}
  
function updateScore() {
    document.getElementById("playerScore").textContent = playerScore;
    document.getElementById("computerScore").textContent = computerScore;
}

function checkWinner() {
if (playerScore === 5 || computerScore === 5) {
    const winner = (playerScore === 5) ? "You won the game! Congratulations!" : "Computer won the game! Try again next time!";
    alert (winner);
    return true;
}
 return false;
}
  