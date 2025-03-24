const displayElem = document.getElementById("countdown-display");

const hourDisplay = document.getElementById("hour");
const minuteDisplay = document.getElementById("minute");
const secondDisplay = document.getElementById("second");

const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const resetBtn = document.getElementById("reset-btn");

let countdown;
let totalSeconds = 0;
let isRunning = false;

function addTimer(event) {
  event.preventDefault();
  const hours = parseInt(hourDisplay?.value) || 0;
  const minutes = parseInt(minuteDisplay?.value) || 0;
  const seconds = parseInt(secondDisplay?.value) || 0;

  totalSeconds = hours * 3600 + minutes * 60 + seconds;

  if (totalSeconds <= 0) {
    alert("Please enter a valid time!");
    hourDisplay.value = "";
    minuteDisplay.value = "";
    secondDisplay.value = "";
  }

  updateDisplay();
}

// add to dom
function updateDisplay() {
  let displayHours = Math.floor(totalSeconds / 3600); // 3678 = 1 hour reminder 78 seconds = 1 hour & 1 minute & 18 seconds
  let displayMinutes = Math.floor((totalSeconds % 3600) / 60); // 3678 = 1 minute reminder 18 seconds
  let displaySeconds = totalSeconds % 60; // 18 seconds

  displayElem.innerText = `${String(displayHours).padStart(2, "0")}:${String(
    displayMinutes
  ).padStart(2, "0")}:${String(displaySeconds).padStart(2, "0")}`;
}

// start countdown
function startCountdown() {
  if (isRunning) return;

  isRunning = true;
  if (totalSeconds <= 0) {
    alert("Please set a valid time first!");
  }

  countdown = setInterval(() => {
    if (totalSeconds <= 0) {
      clearInterval(countdown);
      displayElem.innerText = "00:00:00";
      alert("Time's up!");
      return;
    }
    totalSeconds--;
    updateDisplay();
  }, 1000);
}

// Stop countdown
function stopCountdown() {
  isRunning = false;
  clearInterval(countdown);
}

function resetCountdown() {
  isRunning = false;
  clearInterval(countdown);
  totalSeconds = 0;
  updateDisplay();
}

startBtn?.addEventListener("click", startCountdown);
stopBtn?.addEventListener("click", stopCountdown);
resetBtn?.addEventListener("click", resetCountdown);
