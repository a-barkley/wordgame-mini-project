// Timer
var timerElement = document.querySelector("#timer")
var seconds = 10;

function timer () {
    var timerInterval = setInterval(function () {
        seconds--;
        timerElement.textContent = "Timer: " + seconds;
        if (seconds === 0 || underscoreCount === 0) {
            clearInterval(timerInterval);
            scoreCount()
        } 
    }, 1000)
}

// Start Button Functionality
var Button = document.querySelector("#start")

Button.addEventListener("click", function(){
    timer()
}
)

// Input box
var keyPress = ""
document.addEventListener("keydown", input);
function input(event) {
    document.querySelector("#input").innerHTML = "Guess :" + event.key;
    keyPress = event.key
    compare()
}

var keyPress = document.querySelector("#input")

// Answer display
var answers = ["lambent","precocious","frantic","accord","forsake"]

var selection = answers[Math.floor(Math.random()*5)]

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
getScores()

var underscoreCount = display.length

// Logic for comparing input to answer
function compare() {
    for(var i = 0 ; i < display.length; i++){
        if (keyPress === display[i]) {
            answerArr[i] = keyPress;
            underscoreCount--
            console.log(underscoreCount)
        }
    }

    answer.textContent = answerArr.join(" ")
}


// for loop to get through each character
// if input === display
// replace correct underscore with input 
// if no more underscores
// stop timer and give alert with message

// Stats Box
// Display variables for wins and losses
var win = 0
var loss = 0

function getScores(){
    win = localStorage.getItem('win')
    loss = localStorage.getItem('loss')
    document.querySelector("#stats").innerHTML = "Wins :" + win + "\n Loss : " + loss;
}


function scoreCount(){
    if (underscoreCount === 0){
        win++
        localStorage.setItem("win", win)
        console.log(win)
        console.log(loss)
    } else if (seconds === 0) {
        loss++
        localStorage.setItem("loss", loss)
        console.log(win)
        console.log(loss)
    }
}



// Local storage to store win/loss
// Store wins and losses with stringify
