var scoreRec = document.querySelector('.scored-1');
var lastPage = document.querySelector('.go-back');


var playerEl = JSON.parse(localStorage.getItem('highScores')) || [];



// loop through playerEl array and create list item append to highscores.html

var playerArr = playerEl;

for (var i = 0; i < playerArr.length; i++) {
    var playerObj = playerArr[i];

    var btnPlayer = document.createElement("list");
    btnPlayer.textContent = playerObj.text;
    btnPlayer.setAttribute('class', "player-record")
    scoreRec.appendChild(btnPlayer);
}

