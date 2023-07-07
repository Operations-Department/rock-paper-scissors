const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const playerScore = document.getElementById('player-score');
const compScore = document.getElementById('comp-score');
const outcome = document.getElementById('outcome');
const playerSelected = document.getElementById('player-selected');
const computerSelected = document.getElementById('computer-selected');

const options = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() { 
const randomSelection = Math.floor(Math.random() * options.length);
return options[randomSelection];
};

rock.addEventListener('mouseover', function() {
rock.classList.add('mouseover');
});
rock.addEventListener('mouseout', function() {
rock.classList.remove('mouseover');
});
rock.addEventListener('click', function() {
rock.classList.add('button-clicked');
setTimeout(function () {
        rock.classList.remove('button-clicked');
}, 35);
        game(playRound("Rock", getComputerChoice()));
});

paper.addEventListener('mouseover', function() {
paper.classList.add('mouseover');
});
paper.addEventListener('mouseout', function() {
paper.classList.remove('mouseover');
});
paper.addEventListener('click', function() {
paper.classList.add('button-clicked');
setTimeout(function () {
    paper.classList.remove('button-clicked');
}, 35);
game(playRound("Paper", getComputerChoice()));
});

scissors.addEventListener('mouseover', function() {
scissors.classList.add('mouseover');
});
scissors.addEventListener('mouseout', function() {
scissors.classList.remove('mouseover');
});
scissors.addEventListener('click', function() {
scissors.classList.add('button-clicked');
setTimeout(function () {
    scissors.classList.remove('button-clicked');
}, 35);
game(playRound("Scissors", getComputerChoice()));
});

let compTempScore = 0;
let playerTempScore = 0;

function playRound(playerChoice, computerChoice) {
switch (playerChoice) {
    case "Rock":
        playerSelected.textContent = "✊";
        if (computerChoice === 'Paper') {
            computerSelected.textContent = "🖐";
            compTempScore++;
            compScore.textContent = `🦾: ${compTempScore}`;
            outcome.textContent = "Loss! Rock is covered by paper..";
            break;
        } else if (computerChoice === 'Scissors') {
            computerSelected.textContent = "✌";
            playerTempScore++;
            playerScore.textContent = `💪: ${playerTempScore}`;
            outcome.textContent = "Win! Rock smashes scissors!";
            break;
        } else {
            computerSelected.textContent = "✊";
            outcome.textContent = "Tie with rock";
            break;
        }
    case "Paper":
        playerSelected.textContent = "🖐";
        if (computerChoice === 'Scissors') {
            computerSelected.textContent = "✌";
            compTempScore++;
            compScore.textContent = `🦾: ${compTempScore}`;
            outcome.textContent = "Loss! Paper is cut by scissors..";
            break;
        } else if (computerChoice === 'Rock') {
            computerSelected.textContent = "✊";
            playerTempScore++;
            playerScore.textContent = `💪: ${playerTempScore}`;
            outcome.textContent = "Win! Paper covers rock!";
            break;
        } else {
            computerSelected.textContent = "🖐";
            outcome.textContent = "Tie with paper";
            break;
        }
    case "Scissors":
        playerSelected.textContent = "✌";
        if (computerChoice === 'Rock') {
            computerSelected.textContent = "✊";
            compTempScore++;
            compScore.textContent = `🦾: ${compTempScore}`;
            outcome.textContent = "Loss! Scissors are smashed by rock..";
            break;
        } else if (computerChoice === 'Paper') {
            computerSelected.textContent = "🖐";
            playerTempScore++;
            playerScore.textContent = `💪: ${playerTempScore}`;
            outcome.textContent = "Win! Scissors cut paper!";
            break;
        } else {
            computerSelected.textContent = "✌";
            outcome.textContent = "Tie with scissors";
            break;
        }
    default:
        return "error";
}
};

function game() {
if (playerTempScore === 5) {
    outcome.textContent = `Game! You win ${playerTempScore} - ${compTempScore}!`;
    playerTempScore = 0;
    playerScore.textContent = "💪: 0";
    playerSelected.textContent = "👑";
    compTempScore = 0;
    compScore.textContent = "🦾: 0";
    computerSelected.textContent = "🏳️";
} else if (compTempScore === 5) {
    outcome.textContent = `Game! Computer wins ${compTempScore} - ${playerTempScore}!`;
    playerTempScore = 0;
    playerScore.textContent = "💪: 0";
    playerSelected.textContent = "🤡";
    compTempScore = 0;
    compScore.textContent = "🦾: 0";
    computerSelected.textContent = "👑";
} else {
    return "error";
}
};