var scoreRec = document.querySelector('.scored-1');
var lastPage = document.querySelector('.go-back');
var clearSb = document.querySelector(".clear-scores");


var playerEl = JSON.parse(localStorage.getItem('highScores')) || [];

function clearHistory () {
    localStorage.clear();
    scoreRec.textContent = '';
}

clearSb.addEventListener("click", clearHistory);

// loop through playerEl array and create list item append to highscores.html

var playerArr = playerEl;

for (var i = 0; i < playerArr.length; i++) {
    var playerObj = playerArr[i];

    var btnPlayer = document.createElement("li");
    btnPlayer.textContent = playerObj.initials+"-"+playerObj.score;
    btnPlayer.setAttribute('class', "player-record")
    scoreRec.appendChild(btnPlayer);
}

function Previous() {

}

lastPage.addEventListener('click', Previous);
