var computerChoose = Math.floor((Math.random() * 3) + 1);
console.log(computerChoose);




document.querySelector(".rock-p").addEventListener("click", function () {
    playerChoose = 1;
    document.querySelector(".rock-p").classList.add("game-img-clicked");
    comEffect();
    playGame(playerChoose, computerChoose);
});

document.querySelector(".paper-p").addEventListener("click", function () {
    playerChoose = 2;
    document.querySelector(".paper-p").classList.add("game-img-clicked");
    comEffect();
    playGame(playerChoose, computerChoose);
});

document.querySelector(".scissor-p").addEventListener("click", function () {
    playerChoose = 3;
    document.querySelector(".scissor-p").classList.add("game-img-clicked");
    comEffect();
    playGame(playerChoose, computerChoose);
});


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

function comEffect() {
    if (computerChoose === 1) {
        document.querySelector(".rock-c").classList.add("game-img-clicked");
    } else if (computerChoose === 2) {
        document.querySelector(".paper-c").classList.add("game-img-clicked");
    } else if (computerChoose === 3) {
        document.querySelector(".scissor-c").classList.add("game-img-clicked");
    }
}