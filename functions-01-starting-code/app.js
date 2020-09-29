const startGameBtn = document.getElementById('start-game-btn');


const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';
const RESULT_DRAW = 'DRAW';


let isGameRunning = false;

const getPlayerChoice = () => {
    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}`, '').toUpperCase();

    if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
        console.log(`Invalid choice! we chose ${DEFAULT_USER_CHOICE} for you.`);
        return DEFAULT_USER_CHOICE;
    }
    return selection;
}


const getComputerChoice = () => {
    const randomValue = Math.random();
    if (randomValue < 0.34) {
        return ROCK;
    } else if (randomValue < 0.67) {
        return PAPER;
    } else {
        return SCISSORS;
    }
}


/* const getWinner = function (cChoice, pChoice) {
    if (cChoice === pChoice) {
        return RESULT_DRAW;
    } else if ( (cChoice === ROCK && pChoice === PAPER) ||
         (cChoice === PAPER && pChoice === SCISSORS) ||
         (cChoice === SCISSORS && pChoice === ROCK) ) {
         return RESULT_PLAYER_WINS;
    }else{
        return RESULT_COMPUTER_WINS;
    }
}
 */



const getWinner = (cChoice, pChoice) => 
    cChoice === pChoice ? RESULT_DRAW :
    (cChoice === ROCK && pChoice === PAPER) ||
    (cChoice === PAPER && pChoice === SCISSORS) ||
    (cChoice === SCISSORS && pChoice === ROCK) ? RESULT_PLAYER_WINS : RESULT_COMPUTER_WINS;
    



startGameBtn.addEventListener('click', () => {
    if (isGameRunning) {
        return;
    }
    isGameRunning = true;
    console.log('Game is Starting......');
    const playerChoice = getPlayerChoice();
    //console.log(playerChoice);
    const computerChoice = getComputerChoice();
    const winner = getWinner(computerChoice, playerChoice);
    let message = `You Choose ${playerChoice} and Computer choose ${computerChoice}, therefor you `;
    if (winner === RESULT_DRAW) {
        message = message + 'had draw.';
    } else if (winner === RESULT_PLAYER_WINS) {
        message = message + 'won.';
    } else {
        message = message + 'lost.';
    }
    console.log(message);
    isGameRunning = false;
});


// craete an anonymous function
// const start = function () {
//     console.log('Game is Starting......');
// }

// const person = {
//     name: 'Max',
//     greet: function greet() {
//         console.log("Greet to Max");
//     }
// }

// person.greet();

// console.log(typeof startGame);

// console.dir(startGame);


// In the event listener of game start button create an anonymoous function that display a message oon console


const combine = (resulyHandler, operation, ...numbers) =>{
    const validateNumber = (number) =>{
        return isNaN(number) ? 0 : number;  
    }

    let sum = 0;
    for (const num of numbers) {
        if (operation === 'ADD') {
            sum += validateNumber(num);
        } else {
            sum -= validateNumber(num);
        }
        
    }
    //return sum;

    resulyHandler(sum);
}; 

const showResult = (result , messagetext) => {
    console.log( messagetext + '' + result);
}

combine(showResult.bind(this, 'The result after adding is: '), 'ADD', 1,2,-3,'nkk',5,6,7,8,9);
combine(showResult.bind(this, 'The result after subtracting is: '), 'SUBTRACT', 1,2,-3,4,5,6,7,8,9);

/* const subtractUp = (...numbers) =>{
    let sum = 0;
    for (const num of numbers) {
        sum -= num;
    }
    return sum;
} */

// console.log(sumUp(showResult , 1,2,-3,'nkk',5,6,7,8,9));
// console.log(subtractUp(1,2,3,4,5,6,7,8,9));