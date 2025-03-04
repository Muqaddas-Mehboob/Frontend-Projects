let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const user = document.querySelector("#user");
const comp = document.querySelector("#comp");

const generateCompChoice = () => {
    const options = ['rock','paper','scissors'];
    const index = Math.floor(Math.random() * 3);
    return options[index];
};

const drawGame = () => {
    msg.innerText = "It's a draw";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin) => {
    if(userWin){
        userScore++;
        user.innerText = userScore;
        msg.innerText = "User wins";
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        comp.innerText = compScore;
        msg.innerText = "Computer wins";
        msg.style.backgroundColor = "red";
    }
}
const playGame = (userChoice) => {
    const compChoice = generateCompChoice();

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }

};
choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

