let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");


const genCompChoice = () => {
    const options = ["rock", "pepar", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}
const drawGame = () => {
    // console.log("game was drawn");
    msg.innerText = "Game was draw, Play again";
    msg.style.backgroundColor = "#081b31";

};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        //console.log("you win");
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";

    } else {
        //console.log("you lose");
        compScore++;
        compScorepara.innerText = compScore;

        msg.innerText = `You Lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";

    }
};



const playGame = (userChoice) => {
    // console.log("user choice", userChoice);
    const compChoice = genCompChoice();
    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "pepar" ? false : true;
        } else if (userChoice === "pepar") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}




choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});