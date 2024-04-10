// test
console.log("test link script.js");

// Prelevo il bottone e aggiungo event listener
const startButton = document.getElementById("start-btn");
startButton.addEventListener("click", startCountdown);

// dichiaro una variabile per i secondi
let seconds = 11;

// funzione di call back che si attiva al click del bottone
function startCountdown() {
    const timer = setInterval(function() {
        const secondsElem = document.querySelector(".time");
        startButton.classList.add("d-none");
        secondsElem.classList.remove("d-none")

        if (seconds >= 1) {
            seconds--;
            console.log(seconds);
        } else {
            console.log("buon anno!");
            clearInterval(timer);
        }
        
        // gestisco la stampa in pagina
        const iconElem = document.querySelector(".party-icon")
    
        if (seconds != 0) {
            secondsElem.innerText = `- ${seconds}`;
        } else {
            secondsElem.innerText = `Buon Anno!`;
            iconElem.classList.add("d-block");

        }

    }, 1000)    
}

