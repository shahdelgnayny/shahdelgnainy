var startTime;
var running = false;
var timer;

function start() {
  if (!running) {
    running = true;
    startTime = new Date().getTime();
    timer = setInterval(updateTime, 1000);
  }
}

function stop() {
  if (running) {
    running = false;
    clearInterval(timer);
  }
}

function reset() {
  stop();
  document.getElementById("time").textContent = "00:00:00";
}

function updateTime() {
  var currentTime = new Date().getTime();
  var timeElapsed = currentTime - startTime;

  var hours = Math.floor(timeElapsed / (1000 * 60 * 60));
  var minutes = Math.floor((timeElapsed % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeElapsed % (1000 * 60)) / 1000);

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  document.getElementById("time").textContent = hours + ":" + minutes + ":" + seconds;
}