const btnNew = document.querySelector('.btn-new')
const btnRoll = document.querySelector('.btn-roll');
const btnHold = document.querySelector('.btn-hold');
const finalScore = document.querySelector('.final-score');
const dice = document.querySelector('.dice');

let score = [0, 0], 
currentScore = 0, 
activePlayer = 0, 
gameStatus = true, 
activePlayerPanel = document.querySelector('.player-0-panel');

//change player
const next = () => {
    currentScore = 0;
    activePlayerPanel.querySelector('.player-current-score').textContent = 0;
    activePlayerPanel.classList.remove('active');
    activePlayer = activePlayer === 1 ? 0 : 1;
    activePlayerPanel = document.querySelector('.player-' + activePlayer  +'-panel');
    activePlayerPanel.classList.add('active');
    dice.style.display = 'none';
}


btnRoll.addEventListener('click', () => {
    if(finalScore.value){
        let randomNumber = Math.floor(Math.random() * 6) + 1;
        dice.src = "img/dice-" + randomNumber + ".png";
        dice.style.display = "block";
      if (randomNumber !== 1) {
        currentScore += randomNumber;
        activePlayerPanel.querySelector('.player-current-score').textContent = currentScore;
      }else{
        next();
      }
    }else {
        finalScore.focus();
        finalScore.placeholder = 'Please Insert Winner Score'
    }
});


 btnHold.addEventListener('click', () => {
    if(gameStatus) {
        let endGameScore = finalScore.value;
        score[activePlayer] += currentScore;
        activePlayerPanel.querySelector('.player-score').textContent = score[activePlayer];
        if(score[activePlayer] >= +endGameScore) {
            //winner
             activePlayerPanel.classList.remove('active');
             activePlayerPanel.classList.add('winner');
             activePlayerPanel.querySelector('.player-name').textContent = "Winner";
             dice.style.display = 'none';
             finalScore.placeholder = "Winner Score"
             finalScore.value = "";
             gameStatus = false;
        }else {
           next();
        }
    }
 });

 btnNew.addEventListener('click', () => {
    window.location.reload()

  /*  score = [0,0];
    currentScore = 0;
    activePlayer = 0;
    gameStatus = true;
    activePlayerPanel = document.querySelector('.player-0-panel');
    dice.style.display = 'none';
    document.querySelector('.player-0-panel .player-score').textContent = '0';
    document.querySelector('.player-0-panel .player-current-score').textContent = '0';
    document.querySelector('.player-1-panel .player-score').textContent = '0';
    document.querySelector('.player-1-panel .player-current-score').textContent = '0';
    document.querySelector('.player-0-panel .player-name').textContent = 'Player1';
    document.querySelector('.player-1-panel .player-name').textContent = 'Player2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    finalScore.placeholder = 'Winner score'
    finalScore.value = ''; */
 })