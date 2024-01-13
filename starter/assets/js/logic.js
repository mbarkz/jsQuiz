// * A start button that when clicked a timer starts and the first question appears.
 console.log("JS logic Connected");

var startBTN = document.querySelector("#start");
var startScreen = document.querySelector("#start-screen");
var questions = document.querySelector("#questions");
var timer = document.getElementById("time");

var secondsLeft = 10;

startBTN.addEventListener("click", function hideStart() {
    startScreen.setAttribute("style", "display: none")
})

startBTN.addEventListener("click", function startTimer() {
    var timerInterval = setInterval(function() {
        secondsLeft --;
        timer.textContent = secondsLeft

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            timer.textContent = "Times Up!"
        }
    }, 1000);    
})   


    


// Questions contain buttons for each answer.



// When answer is clicked, the next question appears



// If the answer clicked was incorrect then subtract time from the clock



// * The quiz should end when all questions are answered or the timer reaches 0.



//   * When the game ends, it should display their score and give the user the ability to save their initials and their score