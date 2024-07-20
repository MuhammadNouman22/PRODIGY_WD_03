let [hours, min, sec] = [0, 0, 0];
let displayTimer = document.querySelector(".timer");
let startTimer = document.querySelector("#start");
let resetTimer = document.querySelector("#reset");
let pauseTimer = document.querySelector("#pause");
let interval = null;

function timer() {
  sec++;
  if (sec === 60) {
    sec = 0;
    min++;
    if (min === 60) {
      min = 0;
      hours++;
    }
  }

  let h = hours < 10 ? "0" + hours : hours;
  let m = min < 10 ? "0" + min : min;
  let s = sec < 10 ? "0" + sec : sec;

  displayTimer.innerHTML = h + " : " + m + " : " + s;
}

function watchStart() {
  if (interval === null) {
    interval = setInterval(timer, 1000);
  }
}

function watchReset() {
  clearInterval(interval);
  interval = null;
  [hours, min, sec] = [0, 0, 0];
  displayTimer.innerHTML = "00 : 00 : 00";
}

function watchPause() {
  clearInterval(interval);
  interval = null;
}

startTimer.addEventListener("click", watchStart);
resetTimer.addEventListener("click", watchReset);
pauseTimer.addEventListener("click", watchPause);
