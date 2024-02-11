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

let scores, currentScore;

const initalState = function () {
  scores = [0, 0];
  currentScore = 0;
  player0.classList.add('active-player');
  score0.textContent = 0;
  score1.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  dice.classList.add('hidden');
};

const switchPlayer = function () {};

initalState();

rollBtn.addEventListener('click', function () {
  const number = Math.trunc(Math.random() * 6) + 1;
  dice.classList.remove('hidden');
  dice.src = `assets/dice-${number}.png`;

  if (number === 1) {
    switchPlayer();
  } else {
  }
});
