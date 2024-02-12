'use strict';

const player0 = document.getElementById('player--0');
const player1 = document.getElementById('player--1');
const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const dice = document.querySelector('.dice');
const rollBtn = document.querySelector('.roll-btn');
const holdBtn = document.querySelector('.hold-btn');
const newBtn = document.querySelector('.new-btn');

let scores, currentScore, activePlayer;

const initalState = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  player0.classList.add('active-player');
  player1.classList.remove('active-player');
  score0.textContent = 0;
  score1.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  dice.classList.add('hidden');
  dice.classList.add('hidden');
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
};

const switchPlayer = function () {
  player0.classList.toggle('active-player');
  player1.classList.toggle('active-player');
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
};

initalState();

rollBtn.addEventListener('click', function () {
  const number = Math.trunc(Math.random() * 6) + 1;
  dice.classList.remove('hidden');
  dice.src = `assets/dice-${number}.png`;

  if (number === 1) {
    switchPlayer();
  } else {
    currentScore += number;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  }
});

holdBtn.addEventListener('click', function () {
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  if (scores[activePlayer] >= 100) {
    dice.classList.add('hidden');
    document
      .getElementById(`player--${activePlayer}`)
      .classList.add('player--winner');
    document
      .getElementById(`player--${activePlayer}`)
      .classList.remove('player--active');
  } else {
    switchPlayer();
  }
});

newBtn.addEventListener('click', function () {
  initalState();
});
