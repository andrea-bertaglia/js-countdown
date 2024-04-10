// test
console.log("test link script.js");

let seconds = 0;
let minutes = 0;

const startBtnElem = document.getElementById("start-btn");
console.log(startBtnElem);

// START
startBtnElem.addEventListener("click", function () {
  const clock = setInterval(function () {
    if (seconds < 59) {
      seconds++;
    } else if (minutes < 59) {
      seconds = 0;
      minutes++;
    } else {
      seconds = 0;
      minutes = 0;
    }

    let sStr = seconds <= 9 ? "0" + seconds.toString() : seconds.toString();
    let mStr = minutes <= 9 ? "0" + minutes.toString() : minutes.toString();
    document.getElementById("sec").innerText = sStr;
    document.getElementById("min").innerText = mStr;
  }, 1000);

  // STOP
  document.getElementById("stop-btn").addEventListener("click", function () {
    clearInterval(clock);
  });

  // CANCEL
  document.getElementById("cancel-btn").addEventListener("click", function () {
    seconds = 0;
    minutes = 0;
    document.getElementById("sec").innerText = "0" + seconds;
    document.getElementById("min").innerText = "0" + minutes;
  });
});
