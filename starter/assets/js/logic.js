// * A start button that when clicked a timer starts and the first question appears.
 console.log("JS logic Connected");

// buttons / interactivity
var startBTN = document.querySelector("#start");
var startScreen = document.querySelector("#start-screen");
var questions = document.querySelector("#questions");
var answerOps = document.querySelector("#choices")

// question content
var questionID = document.getElementById("question-title");
var listEl = document.createElement("ol");
var li1 = document.createElement("li")
var li2 = document.createElement("li")
var li3 = document.createElement("li")
var li4 = document.createElement("li")

//score board
var score = 1;
// var correctOp1 = document.querySelector("correct");
function updateScore() {
    score ++;
    document.getElementById('score').textContent = score;
}

//timer settings
var timer = document.getElementById("time");
var secondsLeft = 60;

// start timer event
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

// question 1
startBTN.addEventListener("click", function hideStart() {
    startScreen.setAttribute("style", "display: none")
    questions.setAttribute("style", "display: block");
    questionID.textContent = "Question 1"
    answerOps.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);

    li1.textContent = "Q1.1C";
    li2.textContent = "Q1.2";
    li3.textContent = "Q1.3";
    li4.textContent = "Q1.4";
})

// question 2
listEl.addEventListener("click", function Q2() {
    questionID.textContent = "Question 2"
    li1.textContent = "Q2.1";
    li2.textContent = "Q2.2C";
    li3.textContent = "Q2.3";
    li4.textContent = "Q2.4";

    // question 3
    listEl.addEventListener("click", function Q3() {
        questionID.textContent = "Question 3"
        li1.textContent = "Q3.1";
        li2.textContent = "Q3.2";
        li3.textContent = "Q3.3C";
        li4.textContent = "Q3.4";

        // question 4
        listEl.addEventListener("click", function Q4() {
            questionID.textContent = "Question 4"
            li1.textContent = "Q4.1";
            li2.textContent = "Q4.2";
            li3.textContent = "Q4.3";
            li4.textContent = "Q4.4C";

            // question 5
            listEl.addEventListener("click", function Q5() {
                questionID.textContent = "Question 5"
                li1.textContent = "Q5.1";
                li2.textContent = "Q5.2C";
                li3.textContent = "Q5.3";
                li4.textContent = "Q5.4";
            })
        })
    })
})

// // listEl.addEventListener("click", function nextQ() {
//     questionID.textContent = "Question 3"
//     li1.textContent = "Q3.1";
//     li2.textContent = "Q3.2";
//     li3.textContent = "Q3.3";
//     li4.textContent = "Q3.4";
// // })




    


// Questions contain buttons for each answer.



// When answer is clicked, the next question appears



// If the answer clicked was incorrect then subtract time from the clock



// * The quiz should end when all questions are answered or the timer reaches 0.



//   * When the game ends, it should display their score and give the user the ability to save their initials and their score