
// refresh button
document.querySelector(".refresh").addEventListener("click", function(){
    location.reload();
});

// player choose algorithm
document.querySelector(".rock-p").addEventListener("click", function () {
    var computerChoose = Math.floor((Math.random() * 3) + 1);
    console.log("computer : " + computerChoose);
    playerChoose = 1;
    console.log("player : " + playerChoose);
    document.querySelector(".rock-p").classList.add("game-img-clicked");
    document.querySelector(".paper-p").classList.remove("game-img-clicked")
    document.querySelector(".scissor-p").classList.remove("game-img-clicked");
    comEffect(computerChoose);
    playGame(playerChoose, computerChoose);
});

document.querySelector(".paper-p").addEventListener("click", function () {
    var computerChoose = Math.floor((Math.random() * 3) + 1);
    console.log("computer :"+ computerChoose);
    playerChoose = 2;
    console.log("player : " + playerChoose);
    document.querySelector(".paper-p").classList.add("game-img-clicked");
    document.querySelector(".scissor-p").classList.remove("game-img-clicked");
    document.querySelector(".rock-p").classList.remove("game-img-clicked");
    comEffect(computerChoose);
    playGame(playerChoose, computerChoose);
});

document.querySelector(".scissor-p").addEventListener("click", function () {
    var computerChoose = Math.floor((Math.random() * 3) + 1);
    console.log("computer :"+ computerChoose);
    playerChoose = 3;
    console.log("player : " + playerChoose);
    document.querySelector(".scissor-p").classList.add("game-img-clicked");
    document.querySelector(".rock-p").classList.remove("game-img-clicked");
    document.querySelector(".paper-p").classList.remove("game-img-clicked");
    comEffect(computerChoose);
    playGame(playerChoose, computerChoose);
});

// game logic
let winLose = document.querySelector(".win-lose");
function playGame(playerChoose, computerChoose) {
    if (playerChoose === computerChoose) {
        vsDrawPlayerWin();
        winLose.innerHTML = "DRAW";
    } else if (playerChoose === 1 && computerChoose === 2) {
        vsDrawComputerWin();
    } else if (playerChoose === 1 && computerChoose === 3) {
        vsDrawPlayerWin();
    } else if (playerChoose === 2 && computerChoose === 1) {
        vsDrawPlayerWin();
    } else if (playerChoose === 2 && computerChoose === 3) {
        vsDrawComputerWin();
    } else if (playerChoose === 3 && computerChoose === 1) {
        vsDrawComputerWin();
    } else if (playerChoose === 3 && computerChoose === 2) {
        vsDrawPlayerWin();
    }
}

// win lose add class
function vsDrawPlayerWin() {
    winLose.classList.remove("vs");
    winLose.classList.add("draw");
    winLose.innerHTML = "PLAYER 1 WIN";
}

function vsDrawComputerWin() {
    winLose.classList.remove("vs");
    winLose.classList.add("draw");
    winLose.innerHTML = "COM WIN";
}

// computer padding

function comEffect(computerChoose) {
    if (computerChoose === 1) {
        document.querySelector(".rock-c").classList.add("game-img-clicked");
        document.querySelector(".paper-c").classList.remove("game-img-clicked");
        document.querySelector(".scissor-c").classList.remove("game-img-clicked");
    } else if (computerChoose === 2) {
        document.querySelector(".paper-c").classList.add("game-img-clicked");
        document.querySelector(".scissor-c").classList.remove("game-img-clicked");
        document.querySelector(".rock-c").classList.remove("game-img-clicked");
    } else if (computerChoose === 3) {
        document.querySelector(".scissor-c").classList.add("game-img-clicked");
        document.querySelector(".rock-c").classList.remove("game-img-clicked");
        document.querySelector(".paper-c").classList.remove("game-img-clicked");
    }
}