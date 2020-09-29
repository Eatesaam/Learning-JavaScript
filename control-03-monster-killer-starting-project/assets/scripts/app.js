const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK';
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK';
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK';
const LOG_EVENT_PLAYER_HEAL = 'PLAYER_HEAL';
const LOG_EVENT_GAME_OVER = 'GAME_OVER';

const enterValue = prompt('MAX life : 100');

let choseMaxLife = parseInt(enterValue);

if (isNaN(choseMaxLife) || choseMaxLife <=0) {
    choseMaxLife = 100;
}

let currentMonsterHealth = choseMaxLife;
let currentPlayerHealth = choseMaxLife;
let hasBonusLife = true;
let battelLog = [];
adjustHealthBars(choseMaxLife);


function writeToLog(ev, val, monsterHealth, PlayerHealth) {
    let logEntry ={
        event : ev,
        value : val,
        finalMonsterHealth : monsterHealth,
        finalPlayerHealth : playerHealth
    };
    if (ev === LOG_EVENT_PLAYER_ATTACK) {
        logEntry.target = "MONSTER";
       
    }else if (ev === LOG_EVENT_PLAYER_STRONG_ATTACK) {
        logEntry.target = "MONSTER";
        
    } else if (ev === LOG_EVENT_MONSTER_ATTACK) {
        logEntry.target = "PLAYER";
        
    } else if (ev === LOG_EVENT_PLAYER_HEAL) {
        logEntry.target = "PLAYER";
        
    } else if(ev === LOG_EVENT_GAME_OVER){
        logEntry.target = "MONSTER";
    }
    battelLog.push(logEntry);
    
}

function reset() {
    currentPlayerHealth = choseMaxLife;
    currentMonsterHealth = choseMaxLife;
    resetGame(choseMaxLife);
}

function endRound() {
    let initialPlayerHealth = currentPlayerHealth;
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;

    writeToLog(LOG_EVENT_MONSTER_ATTACK, playerDamage, currentMonsterHealth, currentPlayerHealth);


    if (currentPlayerHealth <=0 && hasBonusLife ) {
        hasBonusLife = false;
        removeBonusLife();
        currentPlayerHealth = initialPlayerHealth;
        setPlayerHealth(initialPlayerHealth);
        alert('Bonus life safe you.');
    }
    if(currentMonsterHealth <=0 && currentPlayerHealth >0){
        alert('You Won!');
        reset();
    }else if(currentPlayerHealth <=0 && currentMonsterHealth >0){
        alert('You Lost!');
        reset();
    }else if(currentMonsterHealth <=0 && currentPlayerHealth <=0){
        alert('Draw');
        reset();
    }   

    /* if (currentMonsterHealth <=0 && currentPlayerHealth >0) {
        reset();
    } */
}

function attackMonster(mode) {
    let maxDamage;
    if (mode === 'ATTACK') {
        maxDamage = ATTACK_VALUE;
    } else if(mode === 'STRONG ATTACK') {
        maxDamage = STRONG_ATTACK_VALUE;
    }

    const monsterDamage = dealMonsterDamage(maxDamage);
    currentMonsterHealth -= monsterDamage;
    endRound();
}

function attackHandler() {
    attackMonster('ATTACK');
}

function strongAttackHandler() {
    attackMonster('STRONG ATTACK');
}

function healPlayerHandler() {
    let healValue;
    if (currentPlayerHealth >= choseMaxLife - HEAL_VALUE) {
        alert("You can't heal anymore.")
        healValue = choseMaxLife - currentPlayerHealth;
    }else{
        healValue = HEAL_VALUE;
    }

    increasePlayerHealth(HEAL_VALUE);  
    currentPlayerHealth += HEAL_VALUE;
    endRound(); 
}

function printLog() {
    console.log(battelLog);
}


attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);
logBtn.addEventListener('click', printLog);