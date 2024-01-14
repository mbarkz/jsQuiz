// * A start button that when clicked a timer starts and the first question appears.
 console.log("JS logic Connected");

var startBTN = document.querySelector("#start");
var startScreen = document.querySelector("#start-screen");
var questions = document.querySelector("#questions");
var answerOps = document.querySelector("#choices")

var questionID = document.getElementById("question-title");
var listEl = document.createElement("ol");
var li1 = document.createElement("li")
var li2 = document.createElement("li")
var li3 = document.createElement("li")
var li4 = document.createElement("li")

var timer = document.getElementById("time");
var secondsLeft = 20;



startBTN.addEventListener("click", function hideStart() {
    startScreen.setAttribute("style", "display: none")
    questions.setAttribute("style", "display: block");
    questionID.textContent = "What do you call a drunken sailor?"
    answerOps.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    li1.textContent = "Bananas";
    li2.textContent = "Boob";
    li3.textContent = "Steve";
    li4.textContent = "Hello";
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