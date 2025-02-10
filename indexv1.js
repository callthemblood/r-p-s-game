const choices = ["rock", "paper", "scissors"];
const player = document.getElementById("player");
const computer = document.getElementById("computer");
const result = document.getElementById("result");
const playerScodeD = document.getElementById("pscoreDisplay");
const computerScodeD = document.getElementById("cscoreDisplay");
const reset = document.getElementById("resetScore");

let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice){

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result1 = '';

    if(playerChoice === computerChoice) {
        result1 = 'It\'s a tie!';
    } else {
        switch(playerChoice) {
            case "rock":
                result1 = (computerChoice == "scissors") ? "You win!" : "You lose!";
                break;
            case "paper":
                result1 = (computerChoice == "rock") ? "You win!" : "You lose!";
                break;
            case "scissors":
                result1 = (computerChoice == "paper") ? "You win!" : "You lose!";
                break;
        } 
    }
    player.textContent = `Player: ${playerChoice}`;
    computer.textContent = `Computer: ${computerChoice}`;
    result.textContent = result1;

    result.classList.remove('greenT', 'redT', 'orangeT');
    switch(result1){
        case "You win!":
            result.classList.add("greenT");
            playerScore++;
            playerScodeD.textContent = playerScore;
            break;
        case "You lose!":
            result.classList.add("redT");
            computerScore++;
            computerScodeD.textContent = computerScore;
            break;
        case "It's a tie!":
            result.classList.add("orangeT");
            break;
    }

    reset.addEventListener('click', () => {
        playerScore = 0;
        computerScore = 0;
        player.textContent = `Player: ${playerChoice}`;
        computer.textContent = `Computer: ${computerChoice}`;
        result.textContent = 'Try again!';
        playerScodeD.textContent = playerScore;
        computerScodeD.textContent = computerScore;
        result.classList.remove('greenT','redT', 'orangeT');
    });

}
