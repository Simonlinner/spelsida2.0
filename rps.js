// Definiera en funktion som kallas 'game' som omfattar hela spellkoden
const game = () => {
    // Skapar spelar- och datorscores samt räkna antalet drag
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;
 
 
// Funktion för att spela spelet
    const playGame = () => {

        // Knappar för sten, sax och påse
        const rockBtn = document.querySelector('.rock');
        const paperBtn = document.querySelector('.paper');
        const scissorBtn = document.querySelector('.scissor');
        const playerOptions = [rockBtn, paperBtn, scissorBtn];
        const computerOptions = ['rock', 'paper', 'scissors']
 
// Loopa igenom varje omgång
        playerOptions.forEach(option => {
            option.addEventListener('click', function () {

// Öka antalet drag och uppdatera visning av återstående drag
                const movesLeft = document.querySelector('.movesleft');
                moves++;
                movesLeft.innerText = `Moves Left: ${10 - moves}`;
 
// Generera random datorval
                const choiceNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[choiceNumber];
 
// Avgör vinnaren av rundan
                winner(this.innerText, computerChoice)

// Kontrollera om maximalt antal drag har nåtts för att avsluta spelet
                if (moves == 10) {
                    gameOver(playerOptions, movesLeft);
                }
            })
        })
 
    }
 
// Funktion för att avgöra vinnaren för varje runda
    const winner = (player, computer) => {
        const result = document.querySelector('.result');
        const playerScoreBoard = document.querySelector('.p-count');
        const computerScoreBoard = document.querySelector('.c-count');
        player = player.toLowerCase();
        computer = computer.toLowerCase();

        // Jämför spelar- och datorval för att avgöra vinnaren
        if (player === computer) {
            result.textContent = 'Tie'
        }
        else if (player == 'rock') {
            if (computer == 'paper') {
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
 
            } else {
                result.textContent = 'Player Won'
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }

// alla olika alternativ för sten, sax och påse
        else if (player == 'scissors') {
            if (computer == 'rock') {
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            } else {
                result.textContent = 'Player Won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if (player == 'paper') {
            if (computer == 'scissors') {
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            } else {
                result.textContent = 'Player Won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
    }
 
// Funktion för att hantera slutet av spelet
    const gameOver = (playerOptions, movesLeft) => {
 
// Göm spelaralternativ och visa meddelande om spelets slut
        const chooseMove = document.querySelector('.move');
        const result = document.querySelector('.result');
        const reloadBtn = document.querySelector('.reload');
 
        playerOptions.forEach(option => {
            option.style.display = 'none';
        })
 
 
        chooseMove.innerText = 'Game Over!!'
        movesLeft.style.display = 'none';
 
// Avgör spelet och visa vinst eller förlust meddelande
        if (playerScore > computerScore) {
            result.style.fontSize = '2rem';
            result.innerText = 'You Won The Game'
            result.style.color = '#308D46';
        }
        else if (playerScore < computerScore) {
            result.style.fontSize = '2rem';
            result.innerText = 'You Lost The Game';
            result.style.color = 'red';
        }
        else {
            result.style.fontSize = '2rem';
            result.innerText = 'Tie';
            result.style.color = 'grey'
        }

// Lägg till funktionalitet för omstartsknappen
        reloadBtn.innerText = 'Restart';
        reloadBtn.style.display = 'flex'
        reloadBtn.addEventListener('click', () => {
            window.location.reload();
        })
    }
 
 
// Starta spelet
    playGame();
 
}
 
// Kalla på game-funktionen för att starta spelet
game();