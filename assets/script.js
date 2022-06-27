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

// Start Button Functionality
var Button = document.querySelector("#start")

Button.addEventListener("click", function(){
    timer()
}
)

// Input box
document.addEventListener("keydown", input);
function input(event) {
    document.querySelector("#input").innerHTML = "Guess :" + event.key;
  }

// Answer display
// Stats Box
// Logic for comparing input to answer
// Local storage to store win/loss