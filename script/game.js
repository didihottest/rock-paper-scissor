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

// player choose action listener
rockPlayerClass.addEventListener("click", function () {
    let rockAction = new Action(1);
    rockAction.playGame();
    rockAction.playerEffect();
    rockAction.comEffect();
});

paperPlayerClass.addEventListener("click", function () {
    let paperAction = new Action(2);
    paperAction.playGame();
    paperAction.playerEffect();
    paperAction.comEffect();
});

scissorPlayerClass.addEventListener("click", function () {
    let scissorAction = new Action(3);
    scissorAction.playGame();
    scissorAction.playerEffect();
    scissorAction.comEffect();
});

// action class when player has choosen
class Action {
    constructor(playerChoose){
        this.playerChoose = playerChoose;
        this.computerChoose = this.computerChoiceLogic();
    }
    // computer random choice logic 
    computerChoiceLogic() {
        return Math.floor((Math.random() * 3) + 1);
    }

    // padding effect when player has choosen
    playerEffect(){
        if (this.playerChoose === 1) {
            rockPlayerClass.classList.add("game-img-clicked");
            paperPlayerClass.classList.remove("game-img-clicked");
            scissorPlayerClass.classList.remove("game-img-clicked");
        } else if (this.playerChoose === 2) {
            paperPlayerClass.classList.add("game-img-clicked");
            scissorPlayerClass.classList.remove("game-img-clicked");
            rockPlayerClass.classList.remove("game-img-clicked");
        } else if (this.playerChoose === 3) {
            scissorPlayerClass.classList.add("game-img-clicked");
            rockPlayerClass.classList.remove("game-img-clicked");
            paperPlayerClass.classList.remove("game-img-clicked");
        }
    }
    // padding effect when computer has choosen
    comEffect() {
        if (this.computerChoose === 1) {
            rockCompClass.classList.add("game-img-clicked");
            paperCompClass.classList.remove("game-img-clicked");
            scissorCompClass.classList.remove("game-img-clicked");
        } else if (this.computerChoose === 2) {
            paperCompClass.classList.add("game-img-clicked");
            scissorCompClass.classList.remove("game-img-clicked");
            rockCompClass.classList.remove("game-img-clicked");
        } else if (this.computerChoose === 3) {
            scissorCompClass.classList.add("game-img-clicked");
            rockCompClass.classList.remove("game-img-clicked");
            paperCompClass.classList.remove("game-img-clicked");
        }
    }
    // game logic
    playGame() {
        if (this.playerChoose === this.computerChoose) {
            this.bothDraw();
        } else if (this.playerChoose === 1 && this.computerChoose === 2 || 
            this.playerChoose === 2 && this.computerChoose === 3 || 
            this.playerChoose === 3 && this.computerChoose === 1) {
            this.computerWin();
        } else if (this.playerChoose === 1 && this.computerChoose === 3 || 
            this.playerChoose === 2 && this.computerChoose === 1 || 
            this.playerChoose === 3 && this.computerChoose === 2) {
            this.playerWin();
        }
    }

    // match indicators 
    bothDraw() {
        winLose.classList.remove("vs");
        winLose.classList.remove("win-or-lose");
        winLose.classList.add("draw");
        winLose.innerHTML = "DRAW";
    }
    
    playerWin() {
        winLose.classList.remove("vs");
        winLose.classList.remove("draw");
        winLose.classList.add("win-or-lose");
        winLose.innerHTML = "PLAYER 1 WIN";
    }
    
    computerWin() {
        winLose.classList.remove("vs");
        winLose.classList.remove("draw");
        winLose.classList.add("win-or-lose");
        winLose.innerHTML = "COM WIN";
    }

}


