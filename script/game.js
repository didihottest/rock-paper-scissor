// Document Selector
let rockPlayerClass = document.querySelector(".rock-p");
let paperPlayerClass = document.querySelector(".paper-p");
let scissorPlayerClass = document.querySelector(".scissor-p");
let rockCompClass = document.querySelector(".rock-c");
let paperCompClass = document.querySelector(".paper-c");
let scissorCompClass = document.querySelector(".scissor-c");
let winLose = document.querySelector(".win-lose");

// choices option
let choices = ["rock", "paper", "scissor"];

// scores
let playerScores = 0;
let computerScores = 0;

// history
let playerChooseHistory = [];
let computerChooseHistory = [];

// player choose action listener
rockPlayerClass.addEventListener("click", function () {
    let rockAction = new Action(choices[0]);
    console.log(`player choose ${choices[0]}`);
    playerChooseHistory.push(choices[0]);
    console.log(`player choice history ${playerChooseHistory}`);
    rockAction.playerEffect();
    rockAction.comEffect();
    rockAction.playGame();
});

paperPlayerClass.addEventListener("click", function () {
    let paperAction = new Action(choices[1]);
    console.log(`player choose ${choices[1]}`);
    playerChooseHistory.push(choices[1]);
    console.log(`player choice history ${playerChooseHistory}`);
    paperAction.playerEffect();
    paperAction.comEffect();
    paperAction.playGame();
});

scissorPlayerClass.addEventListener("click", function () {
    let scissorAction = new Action(choices[2]);
    console.log(`player choose ${choices[2]}`);
    playerChooseHistory.push(choices[2]);
    console.log(`player choice history ${playerChooseHistory}`);
    scissorAction.playerEffect();
    scissorAction.comEffect();
    scissorAction.playGame();
});

// action class when player has choosen
class Action {
    constructor(playerChoose){
        this.playerChoose = playerChoose;
        this.computerChoose = this.computerChoiceLogic();
    }
    // computer random choice logic 
    computerChoiceLogic() {
        let computerChoosen = choices[Math.floor((Math.random() * 3))];
        console.log(`computer choose ${computerChoosen}`);
        computerChooseHistory.push(computerChoosen);
        console.log(`computer choice history ${computerChooseHistory}`);
        return computerChoosen;
    }

    // padding effect when player has choosen
    playerEffect(){
        if (this.playerChoose === "rock") {
            rockPlayerClass.classList.add("game-img-clicked");
            paperPlayerClass.classList.remove("game-img-clicked");
            scissorPlayerClass.classList.remove("game-img-clicked");
        } else if (this.playerChoose === "paper") {
            paperPlayerClass.classList.add("game-img-clicked");
            scissorPlayerClass.classList.remove("game-img-clicked");
            rockPlayerClass.classList.remove("game-img-clicked");
        } else if (this.playerChoose === "scissor") {
            scissorPlayerClass.classList.add("game-img-clicked");
            rockPlayerClass.classList.remove("game-img-clicked");
            paperPlayerClass.classList.remove("game-img-clicked");
        }
    }
    // padding effect when computer has choosen
    comEffect() {
        if (this.computerChoose === "rock") {
            rockCompClass.classList.add("game-img-clicked");
            paperCompClass.classList.remove("game-img-clicked");
            scissorCompClass.classList.remove("game-img-clicked");
        } else if (this.computerChoose === "paper") {
            paperCompClass.classList.add("game-img-clicked");
            scissorCompClass.classList.remove("game-img-clicked");
            rockCompClass.classList.remove("game-img-clicked");
        } else if (this.computerChoose === "scissor") {
            scissorCompClass.classList.add("game-img-clicked");
            rockCompClass.classList.remove("game-img-clicked");
            paperCompClass.classList.remove("game-img-clicked");
        }
    }
    // game logic
    playGame() {
        if (this.playerChoose === this.computerChoose) {
            this.bothDraw();
            console.log(`Draw`);
        } else if (this.playerChoose === "rock" && this.computerChoose === "paper" || 
            this.playerChoose === "paper" && this.computerChoose === "scissor" || 
            this.playerChoose === "scissor" && this.computerChoose === "rock") {
            this.computerWin();
            computerScores ++;
            console.log(`${this.computerChoose} over ${this.playerChoose} Computer Wins`);
        } else if (this.playerChoose === "rock" && this.computerChoose === "scissor" || 
            this.playerChoose === "paper" && this.computerChoose === "rock" || 
            this.playerChoose === "scissor" && this.computerChoose === "paper") {
            this.playerWin();
            console.log(`${this.playerChoose} over ${this.computerChoose} Player Wins`);
            playerScores ++;
        }

        console.log(`Player Scores : ${playerScores} Computer Scores : ${computerScores}`);
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

// refresh button
document.querySelector(".refresh").addEventListener("click", function () {
    location.reload();
});
