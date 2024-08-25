const rockButton = document.querySelector('#rock-button');
const paperButton = document.querySelector('#paper-button');
const scissorsButton = document.querySelector('#scissors-button');

const resultDiv = document.querySelector('.result');
const scoreDiv = document.querySelector('.score');

const resetButton = document.querySelector('.reset');

const score = JSON.parse(localStorage.getItem('score')) || {wins: 0, losses: 0, ties: 0};

const getComputerMove = () => {
    const randomNumber = Math.random();

    if(randomNumber >= 0 && randomNumber < 1/3) {
        return 'rock';
    } else if(randomNumber >= 1/3 && randomNumber < 2/3) {
        return 'paper';
    } else if(randomNumber >= 2/3 && randomNumber < 1) {
        return 'scissors';
    }
}

const playGame = (playerMove) => {
    let computerMove = getComputerMove();
    let result = '';

    if(playerMove === computerMove) {
        result = `It's a Tie!`;
    } else if(
        (playerMove === 'rock' && computerMove === 'scissors') || 
        (playerMove === 'paper' && computerMove === 'rock') || 
        (playerMove === 'scissors' && computerMove === 'paper')) {
            result = `You win.`;
    } else {
        result = `You lose.`;
    }

    if(result === `You win.`) {
        score.wins += 1;
    } else if(result === `You lose.`) {
        score.losses += 1;
    } else if(result === `It's a Tie!`) {
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    resultDiv.innerHTML = `You picked ${playerMove}. Computer picked ${computerMove}. ${result}`;

    scoreDiv.innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
}

rockButton.addEventListener('click', () => playGame('rock'));
paperButton.addEventListener('click', () => playGame('paper'));
scissorsButton.addEventListener('click', () => playGame('scissors'));

resetButton.addEventListener('click', () => {
    localStorage.removeItem('score');
})