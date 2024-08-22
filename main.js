const rockButton = document.querySelector('#rock-button');
const paperButton = document.querySelector('#paper-button');
const scissorsButton = document.querySelector('#scissors-button');

const resultDiv = document.querySelector('.result');

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

const playGame = (userMove) => {
    let computerMove = getComputerMove();
    let result = '';

    if(userMove === computerMove) {
        result = `It's a Tie!`;
    } else if(
        (userMove === 'rock' && computerMove === 'scissors') || 
        (userMove === 'paper' && computerMove === 'rock') || 
        (userMove === 'scissors' && computerMove === 'paper')) {
            result = `You win.`
    } else {
        result = 'You lose.'
    }

    resultDiv.innerHTML = `You picked ${userMove}. Computer picked ${computerMove}. ${result}`;
}

rockButton.addEventListener('click', () => playGame('rock'));
paperButton.addEventListener('click', () => playGame('paper'));
scissorsButton.addEventListener('click', () => playGame('scissors'));