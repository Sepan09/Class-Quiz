var timeLabel = document.querySelector(".timer-font");
var startButtonLabel = document.querySelector(".start-button");
var staringTextLabel = document.querySelector(".starting-text");
var challengeTextLabel = document.querySelector(".center-piece");
var mainE1 = document.querySelector(".main");
var questionE1 = document.querySelector(".question");
var answersE1 = document.querySelector(".answers");
// var endBtn = document.getElementById('submit-btn');
var playerEl = JSON.parse(localStorage.getItem('highScores')) || [];

var isWin = false;
var timer;
var timerCount;
var correct = [];
var wrong = [];



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
    },
    {
        question: "Arrays in JavaScript can be used to store _____.",
        answer: [
            {text: "booleans", correct: false},
            {text: "other arrays", correct: false},
            {text: "numbers and strings", correct: false},
            {text: "all of the above", correct:true}
        ]
    },
    {
        question: "How can you make a button clickable ?",
        answer: [
            {text: "click", correct: false},
            {text: "innerhtml", correct: false},
            {text: "setAttribute", correct: false},
            {text: "addEventListener", correct:true}
        ]
    },
]

startButtonLabel.addEventListener("click", startGame);

function startGame(event) {
    event.preventDefault();
    isWin = false;
    timerCount = 30;
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
};

function startTimer() {
    timer =setInterval(function() {
        timerCount--;
        timeLabel.textContent = timerCount;
        if (timerCount <= 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000);
};

function nextQuestion(event) {

    
    if (event) {
        var correctAnswer = event.target.dataset.correct === 'true';
        
        console.log(correctAnswer);
        if (correctAnswer) {
            timerCount = timerCount + 15;
            correct.push(correctAnswer);
        } else {
            timerCount = timerCount - 15;
            wrong.push(correctAnswer);
        }
        
    }
    
    
    if(currentQuestionIndex === shuffledQuestions.length) {
        endGame();
        return;
    }
    showQuestion(shuffledQuestions[currentQuestionIndex]);
    currentQuestionIndex++;

    // questionArr[currentQuestionIndex];
};

function showQuestion(question) {
    questionE1.innerText = question.question
    answersE1.innerHTML = '';

    var answersArr = question.answer;

    for (var i = 0; i < answersArr.length; i++) {
        var answerObj = answersArr[i];
    
        var btnEl = document.createElement("button");
        btnEl.textContent = answerObj.text;
        btnEl.setAttribute("data-correct", answerObj.correct);
        btnEl.setAttribute('class', "button")
        btnEl.addEventListener("click", nextQuestion);
        answersE1.appendChild(btnEl);
    }

};

function scoreSheet () {
    var playerScore = document.querySelector('.score').value;
    console.log(playerScore);
    var obj = {
        initials: playerScore, 
        score: correct.length
    }
    playerEl.push(obj);
    localStorage.setItem('highScores', JSON.stringify(playerEl));
    window.location.replace('./highscores.html')
}


function endGame() {
    console.log('end game');
    questionE1.innerHTML = '';
    answersE1.innerHTML = '';
    clearInterval(timer);
    // endEl.style.display = 'block';


    // add form for scores
    mainE1.innerHTML = `
    <h1> All Done!</h1>
    <p>Your final score is ${correct.length}</p>
    Enter initial: <input class = 'score' type="text" />
    <button id="submit-btn" onclick = 'scoreSheet()'>Submit</button>
    ` 


}
