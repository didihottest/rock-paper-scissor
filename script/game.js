
// refresh button
document.querySelector(".refresh").addEventListener("click", function(){
    location.reload();
});

// player choose algorithm
document.querySelector(".rock-p").addEventListener("click", function () {
    var computerChoose = Math.floor((Math.random() * 3) + 1);
    console.log("computer :"+ computerChoose);
    playerChoose = 1;
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
        winLose.classList.remove("vs")
        winLose.classList.add("draw")
        winLose.innerHTML = "DRAW";
    } else if (playerChoose === 1 && computerChoose === 2) {
        winLose.classList.remove("vs")
        winLose.classList.add("draw")
        winLose.innerHTML = "COM WIN";
    } else if (playerChoose === 1 && computerChoose === 3) {
        winLose.classList.remove("vs")
        winLose.classList.add("draw")
        winLose.innerHTML = "PLAYER 1 WIN";
    } else if (playerChoose === 2 && computerChoose === 1) {
        winLose.classList.remove("vs")
        winLose.classList.add("draw")
        winLose.innerHTML = "PLAYER 1 WIN";
    } else if (playerChoose === 2 && computerChoose === 3) {
        winLose.classList.remove("vs")
        winLose.classList.add("draw")
        winLose.innerHTML = "COM WIN";
    } else if (playerChoose === 3 && computerChoose === 1) {
        winLose.classList.remove("vs")
        winLose.classList.add("draw")
        winLose.innerHTML = "COM WIN";
    } else if (playerChoose === 3 && computerChoose === 2) {
        winLose.classList.remove("vs")
        winLose.classList.add("draw")
        winLose.innerHTML = "PLAYER 1 WIN";
    }
}

// computer padding

function comEffect(computerChoose) {
    if (computerChoose === 1) {
        document.querySelector(".rock-c").classList.add("game-img-clicked");
        document.querySelector(".paper-c").classList.remove("game-img-clicked")
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