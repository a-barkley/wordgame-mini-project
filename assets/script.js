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

var keyPress = document.querySelector("#input")

// Answer display
var answers = ["lambent","precocious","frantic","accord","forsake"]

var selection = answers[Math.floor(Math.random()*5)]
  console.log(selection)

var display = selection.split('')
    console.log(display);

var answer = document.querySelector("#answer");
answerArr = [];

function generate(){    
    for(var i = 0;i<display.length;i++){
        answerArr.push("_");
    }
    answer.textContent = answerArr.join(" ")
}
generate()
console.log(answer);


// Logic for comparing input to answer
function compare() {
    for(var i = 0 ; i < display.length; i++){
        if (keyPress.key === display[i]) {
            answerArr[i] = keyPress.key;
        }
    }
}


// for loop to get through each character
// if input === display
// replace correct underscore with input 
// if no more underscores
// stop timer and give alert with message

// Stats Box
// Display variables for wins and losses

// Local storage to store win/loss
// Store wins and losses with stringify
