const timerDisplay = document.getElementById("timer");
const startStopButton = document.getElementById("start-stop");
const lapButton = document.getElementById("lap");
const resetButton = document.getElementById("reset");
const lapsList = document.getElementById("laps");

let startTime;
let intervalId;
let laps = [];

startStopButton.addEventListener("click", function () {
  if (!intervalId) {
    startTime = Date.now();
    intervalId = setInterval(function () {
      const elapsedTime = Date.now() - startTime;
      timerDisplay.innerText = (elapsedTime / 1000).toFixed(2) + "s";
    }, 10);
    startStopButton.innerText = "Stop";
  } else {
    clearInterval(intervalId);
    intervalId = null;
    startStopButton.innerText = "Start";
  }
});

lapButton.addEventListener("click", function () {
  if (intervalId) {
    const elapsedTime = Date.now() - startTime;
    laps.push((elapsedTime / 1000).toFixed(2));

    const lapItem = document.createElement("li");
    lapItem.innerText = laps[laps.length - 1] + "s";
    lapsList.appendChild(lapItem);
  }
});

resetButton.addEventListener("click", function () {
  clearInterval(intervalId);
  intervalId = null;
  startStopButton.innerText = "Start";
  timerDisplay.innerText = "0.00s";
  laps = [];
  lapsList.innerHTML = "";
});
