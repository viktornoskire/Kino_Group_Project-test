'use strict';

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const newSecretNumber = function () {
  return Math.trunc(Math.random() * 20) + 1;
};
const newScoreText = function (scoreText) {
  document.querySelector('.score').textContent = scoreText;
};
const changeBackgroundColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};
const secretNumberText = function (numberText) {
  document.querySelector('.number').textContent = numberText;
};
const secretNumberStyle = function (style) {
  document.querySelector('.number').style.width = style;
};

let secretNumber = newSecretNumber();

const checkButton = document.querySelector('.check');

const againButton = document.querySelector('.again');
let score = 20;

let highscore = 0;

checkButton.addEventListener('click', () => {
  const guessNumber = Number(document.querySelector('.guess').value);
  const highScoreText = document.querySelector('.highscore');

  //When there is no input
  if (!guessNumber) {
    displayMessage('🚩 Please enter a number.');
    //When the player wins
  } else if (guessNumber === secretNumber) {
    displayMessage('🎉 You guessed the correct number!');
    secretNumberText(secretNumber);
    changeBackgroundColor('#60b347');
    secretNumberStyle('30rem');

    if (score > highscore) {
      highscore = score;
      highScoreText.textContent = highscore;
    }
    //When guess is wrong
  } else if (guessNumber !== secretNumber) {
    if (score > 1) {
      displayMessage(guessNumber > secretNumber ? '📈 Your number was to high.' : '📉 Your number was to low.');
      score--;
      newScoreText(score);
    } else {
      displayMessage('🤯 You lost the game!');
      newScoreText(0);
    }
  }
});
//Reset game (Again button)
againButton.addEventListener('click', () => {
  const guessInput = document.querySelector('.guess');

  secretNumber = newSecretNumber();
  newScoreText(20);
  score = 20;
  displayMessage('Start guessing...');
  secretNumberText('?');
  guessInput.value = '';
  secretNumberStyle('15rem');
  changeBackgroundColor('#222');
});
