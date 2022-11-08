window.addEventListener("load", init);

// Global Variables
let currentLevel = 0;
let time = currentLevel;
let score = 0;
let isPlaying;

// DOM Elements
const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const timeDIsplay = document.querySelector("#time");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");
const easyLevel = document.getElementById("easy");
const mediumLevel = document.getElementById("medium");
const hardLevel = document.getElementById("hard");

// Listen to the level click and set the time for the level
// Show number of seconds in UI for any level that is clicked
easyLevel.addEventListener("click", () => {
  currentLevel = 5;
  seconds.innerHTML = 5;
});
mediumLevel.addEventListener("click", () => {
  currentLevel = 3;
  seconds.innerHTML = 3;
});
hardLevel.addEventListener("click", () => {
  currentLevel = 2;
  seconds.innerHTML = 2;
});

// Random words
var words = [
  "hat",
  "river",
  "lucky",
  "statue",
  "generate",
  "stubborn",
  "cocktail",
  "Origin",
  "Output",
  "Oxford",
  "Packed",
  "Palace",
  "Parent",
  "Partly",
  "Patent",
  "People",
  "Domain",
  "Double",
  "Driven",
  "Driver",
  "During",
  "Easily",
  "Eating",
  "Editor",
  "Effect",
  "Effort",
  "Eighth",
  "Either",
  "Broken",
  "Budget",
  "Burden",
  "Bureau",
  "Button",
  "runaway",
  "joke",
  "developer",
  "establishment",
  "hero",
  "javascript",
  "nutrition",
  "revolver",
  "echo",
  "Window",
  "Treaty",
  "Trying",
  "Twelve",
  "Twenty",
  "Unable",
  "Unique",
  "United",
  "Unless",
  "Unlike",
  "Update",
  "Though",
  "Threat",
  "Thrown",
  "Ticket",
  "Timely",
  "Timing",
  "Suffer",
  "Summer",
  "siblings",
  "investigate",
  "horrendous",
  "symptom",
  "laughter",
  "magic",
  "master",
  "space",
  "definition",
  "champion",
  "ghost",
  "fierce",
  "Walker",
  "Wealth",
  "Weekly",
  "Weight",
  "Wholly",
  "Summit",
  "Supply",
  "Surely",
  "Survey",
  "Switch",
  "Symbol",
  "System",
  "Taking",
  "Talent",
  "Camera",
  "Cancer",
  "Cannot",
  "Carbon",
  "Career",
  "Castle",
  "Casual",
];

// Initialize Game
function init() {
  //  Load word from array
  showWord(words);

  //   Start matching on input input
  wordInput.addEventListener("input", startMatch);

  //   Call countdown every second
  setInterval(countdown, 1000);

  //   Check game status
  setInterval(checkStatus, 50);
}

//  Start match
function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = "";
    score++;
  }

  // Id score is -1, display 0
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

// Match currentWord to wordInput
function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = "Correct!!!".fontcolor("green");
    return true;
  } else {
    message.innerHTML = "Typing Error".fontcolor("red");
    return false;
  }
}

// Pick & and show random words
function showWord(words) {
  // Generate random array index
  const randIndex = Math.floor(Math.random() * words.length);
  currentWord.innerHTML = words[randIndex];
}
// Countdown timer
function countdown() {
  // Make sure time is not run out
  if (time > 0) {
    // decrement
    time--;
  } else if (time === 0) {
    // GAme is over
    isPlaying = false;
  }
  timeDIsplay.innerHTML = time;
}

// Check game status
function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = "Game Over!!!";
    score = -1;
  }
}
