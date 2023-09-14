var timeLabel = document.querySelector(".timer-font");
var startButtonLabel = document.querySelector(".start-button");
var staringTextLabel = document.querySelector(".starting-text");
var challengeTextLabel = document.querySelector(".center-piece");
var mainE1 = document.querySelector(".main");
var questionE1 = document.querySelector(".question");
var answersE1 = document.querySelector(".answers");

var isWin = false;
var timer;
var timerCount;

let shuffledQuestions, currentQuestionIndex

var questionArr = [
    {
        question: "What condition in an if/else statement is enclosed within _____.",
        answer: [
            {text: "curly brackets", correct: true},
            {text: "quotes", correct: false},
            {text: "parentheses", correct: false},
            {text: "square brackets", correct:false}
        ]
    },
    {
        question: "Commonly used data types DO NOT include:",
        answer: [
            {text: "numbers", correct: true},
            {text: "alerts", correct: false},
            {text: "strings", correct: false},
            {text: "booleans", correct:false}
        ]
    }
]

startButtonLabel.addEventListener("click", startGame);


function startGame(event) {
    event.preventDefault();
    isWin = false;
    timerCount = 40;
    // mainE1.style.display = "none";
    staringTextLabel.style.display = "none";
    challengeTextLabel.style.display = "none";
    startButtonLabel.style.display = "none";
    questionE1.style.display = "block";
    startButtonLabel.disabled = true;
    shuffledQuestions = questionArr.sort(() => Math.random() - .5);
    currentQuestionIndex = 0

    nextQuestion();
    startTimer();
}

function startTimer() {
    timer =setInterval(function() {
        timerCount--;
        timeLabel.textContent = timerCount;
        if (timerCount ===0) {
            clearInterval(timer);
        }
    }, 1000);
}

function nextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex]);
    if ( questionArr.answer === true) {
        currentQuestionIndex++
        nextQuestion();
    }
};

function showQuestion(question) {
    questionE1.innerText = question.question

    var answersArr = question.answer;

    for (var i = 0; i < answersArr.length; i++) {
        var answerObj = answersArr[i];
    
        var btnEl = document.createElement("button");
        btnEl.textContent = answerObj.text;
        btnEl.setAttribute("data-correct", answerObj.correct);
        btnEl.setAttribute('class', "button")
        
        answersE1.appendChild(btnEl);
    }

}

function selectAnswer () {
    var selectedButton = target;
    var correct = selectedButton.dataset.correct;
}

function winGame() {

}

function loseGame() {

}
