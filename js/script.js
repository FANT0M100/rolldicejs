const btnNew = document.querySelector('.btn-new')
const btnRoll = document.querySelector('.btn-roll');
const btnHold = document.querySelector('.btn-hold');
const finalScore = document.querySelector('.final-score');
const dice = document.querySelector('.dice');


btnRoll.addEventListener('click', () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    dice.src = 'img/dice-' + randomNumber + ".png"
})