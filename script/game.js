// Document Selector
let rockPlayerClass = document.querySelector(".rock-p");
let paperPlayerClass = document.querySelector(".paper-p");
let scissorPlayerClass = document.querySelector(".scissor-p");
let rockCompClass = document.querySelector(".rock-c");
let paperCompClass = document.querySelector(".paper-c");
let scissorCompClass = document.querySelector(".scissor-c");
let winLose = document.querySelector(".win-lose");


// refresh button
document.querySelector(".refresh").addEventListener("click", function () {
    location.reload();
});

// player choose algorithm
rockPlayerClass.addEventListener("click", function () {
    var computerChoose = Math.floor((Math.random() * 3) + 1);
    playerChoose = 1;
    rockPlayerClass.classList.add("game-img-clicked");
    paperPlayerClass.classList.remove("game-img-clicked")
    scissorPlayerClass.classList.remove("game-img-clicked");
    comEffect(computerChoose);
    playGame(playerChoose, computerChoose);
});

paperPlayerClass.addEventListener("click", function () {
    var computerChoose = Math.floor((Math.random() * 3) + 1);
    playerChoose = 2;
    paperPlayerClass.classList.add("game-img-clicked");
    scissorPlayerClass.classList.remove("game-img-clicked");
    rockPlayerClass.classList.remove("game-img-clicked");
    comEffect(computerChoose);
    playGame(playerChoose, computerChoose);
});

scissorPlayerClass.addEventListener("click", function () {
    var computerChoose = Math.floor((Math.random() * 3) + 1);
    playerChoose = 3;
    scissorPlayerClass.classList.add("game-img-clicked");
    rockPlayerClass.classList.remove("game-img-clicked");
    paperPlayerClass.classList.remove("game-img-clicked");
    comEffect(computerChoose);
    playGame(playerChoose, computerChoose);
});

// game logic
function playGame(playerChoose, computerChoose) {
    if (playerChoose === computerChoose) {
        bothDraw();
    } else if (playerChoose === 1 && computerChoose === 2) {
        computerWin();
    } else if (playerChoose === 1 && computerChoose === 3) {
        playerWin();
    } else if (playerChoose === 2 && computerChoose === 1) {
        playerWin();
    } else if (playerChoose === 2 && computerChoose === 3) {
        computerWin();
    } else if (playerChoose === 3 && computerChoose === 1) {
        computerWin();
    } else if (playerChoose === 3 && computerChoose === 2) {
        playerWin();
    }
}

// win lose draw add class
function bothDraw () {
    winLose.classList.remove("vs");
    winLose.classList.remove("win-or-lose");
    winLose.classList.add("draw");
    winLose.innerHTML = "DRAW";
}

function playerWin() {
    winLose.classList.remove("vs");
    winLose.classList.remove("draw");
    winLose.classList.add("win-or-lose");
    winLose.innerHTML = "PLAYER 1 WIN";
}

function computerWin() {
    winLose.classList.remove("vs");
    winLose.classList.remove("draw");
    winLose.classList.add("win-or-lose");
    winLose.innerHTML = "COM WIN";
}

// computer padding

function comEffect(computerChoose) {
    if (computerChoose === 1) {
        rockCompClass.classList.add("game-img-clicked");
        paperCompClass.classList.remove("game-img-clicked");
        scissorCompClass.classList.remove("game-img-clicked");
    } else if (computerChoose === 2) {
        paperCompClass.classList.add("game-img-clicked");
        scissorCompClass.classList.remove("game-img-clicked");
        rockCompClass.classList.remove("game-img-clicked");
    } else if (computerChoose === 3) {
        scissorCompClass.classList.add("game-img-clicked");
        rockCompClass.classList.remove("game-img-clicked");
        paperCompClass.classList.remove("game-img-clicked");
    }
}