// Timer
var timerElement = document.querySelector("#timer")
var seconds = 60;

function timer () {
    var timerInterval = setInterval(function () {
        seconds--;
        timerElement.textContent = "Timer: " + seconds;
        if (seconds === 0) {
            clearInterval(timerInterval);
        } 
        console.log(seconds);
    }, 1000)
}

timer()

// Start Button Functionality
// Input box
// Answer display
// Stats Box
// Logic for comparing input to answer
// Local storage to store win/loss