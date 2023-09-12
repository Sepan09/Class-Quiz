var timeLabel = document.querySelector(".timer-font");
var startButtonLabel = document.querySelector(".start-button");
var staringTextLabel = document.querySelector(".starting-text");
var challengeTextLabel = document.querySelector(".center-piece");

var isWin = false;
var timer;
var timerCount;



function startGame() {
    isWin = false;
    timerCount = 40;
    startButtonLabel.disabled = true;
    clearInterval(staringTextLabel);
    startTimer();
}

function startTimer() {
    timer =setInterval(function() {
        timercount--;
        timeLabel.textContent = timercount;
        if (timer ===0) {
            clearInterval(timer);
            loseGame()
        }
    }, 1000);
}

function winGame() {

}

function loseGame() {

}
startButtonLabel.addEventListener("click", startGame);