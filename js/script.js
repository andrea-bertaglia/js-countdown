// test
console.log("test link script.js");

// Prelevo il bottone e aggiungo event listener
const startButton = document.getElementById("start-btn");
startButton.addEventListener("click", startCountdown);

// dichiaro una variabile per i secondi
let seconds = 10;

// funzione di call back che si attiva al click del bottone
function startCountdown() {
    if (seconds > 1) {
        seconds--;
        console.log(seconds);
    } else {
        console.log("buon anno!");
        clearInterval(stopTimer);
    }
    
}

const stopTimer = setInterval(startCountdown, 1000);

