const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  mobileMenu?.classList?.contains("max-md:hidden")
    ? mobileMenu?.classList?.remove("max-md:hidden")
    : mobileMenu?.classList?.add("max-md:hidden");
});

const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const resetBtn = document.getElementById("reset-btn");
const stopwatchDisplay = document.getElementById("stopwatch-display");
let timer;
let ms = 0,
  seconds = 0,
  minutes = 0,
  hours = 0;
let isRunning = false;

function startStopwatch() {
  if (isRunning) return;

  isRunning = true;

  timer = setInterval(() => {
    ms += 10;

    if (ms >= 1000) {
      ms = 0;
      seconds++;
    }
    if (seconds >= 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }

    updateDisplay();
  }, 10);
}

function stopStopwatch() {
  clearInterval(timer);
  isRunning = false;
}

function resetStopwatch() {
  clearInterval(timer);
  ms = 0;
  seconds = 0;
  minutes = 0;
  hours = 0;
  isRunning = false;
  updateDisplay();
}

function updateDisplay() {
  stopwatchDisplay.innerText = `${String(hours).padStart(2, "0")}:${String(
    minutes
  ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}:${String(
    ms / 10
  ).padStart(2, "0")}`;
}

startBtn.addEventListener("click", startStopwatch);
stopBtn.addEventListener("click", stopStopwatch);
resetBtn.addEventListener("click", resetStopwatch);
