
let playerChoose;

document.querySelector(".rock-p").addEventListener("click", function() {
    playerChoose = 1;
});

document.querySelector(".paper-p").addEventListener("click", function(){
    playerChoose = 2;
});

document.querySelector(".scissor-p").addEventListener("click", function(){
    playerChoose = 3;
});

console.log(playerChoose);