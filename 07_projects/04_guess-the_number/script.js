let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#submit");
const userInput = document.querySelector("#guessField");
const startOver = document.querySelector(".resultParams");
const remainingGuesses = document.querySelector(".remainingGuesses");
const previousGuesses = document.querySelector(".previousGuesses");
const lowOrHigh = document.querySelector(".lowOrHigh");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("Please enter number greater than 1");
  } else if (guess > 100) {
    alert("Please enter number less than 100");
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      dispalyMessage(`Game over. Random number was ${randomNumber} `);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    dispalyMessage("You guessed it right !!!");
    endGame();
  } else if (guess < randomNumber) {
    dispalyMessage("Number is too low");
  } else if (guess > randomNumber) {
    dispalyMessage("Number is too high");
  }
}

function displayGuess(guess) {
  userInput.value = "";
  previousGuesses.innerHTML += `${guess}, `;
  numGuess++;
  remainingGuesses.innerHTML = `${11 - numGuess}`;
}

function dispalyMessage(message) {
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start new game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector("#newGame"); // Correct selector
  newGameButton.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    previousGuesses.innerHTML = "";
    remainingGuesses.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame = true;
  });
}
