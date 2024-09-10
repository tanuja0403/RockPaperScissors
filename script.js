let userScore = 0;
let computerScore = 0;
// let instruction = true;

const choices = document.querySelectorAll(".button");
let uScore = document.getElementById('user-score').innerHTML;
let cScore = document.getElementById('computer-score').innerHTML;

uScore = Number(uScore);
cScore = Number(cScore);

console.log(uScore);

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const ranIdx = Math.floor(Math.random() * 3);
  return options[ranIdx];

}

const drawGame = () => {
  console.log("Game was draw");
}

const showWinner = (userWin) => {
  if (userWin === true) {
    console.log("you win!");
    uScore++;
    document.getElementById('user-score').innerHTML = uScore;


  }
  else {
    console.log("you lose!");
    cScore++;
    document.getElementById('computer-score').innerHTML = cScore;
  }
}

const playGame = (userButton) => {
  console.log("user clicked on :", userButton);
  const compChoice = genCompChoice();
  console.log(" comp clicked on :", compChoice);
  let userWin;

  if (userButton === compChoice) {
    drawGame();
  }
  else {
    if (userButton === "rock") {
      userWin = compChoice === "paper" ? false : true;
    }
    else if (userButton === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    }
    else (userButton === "scissors")
    userWin = compChoice === "rock" ? false : true;
  }
  showWinner(userWin);

};

choices.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonId = button.getAttribute("id");
    // console.log("button was clicked", buttonId);
    playGame(buttonId);
    // document.getElementById('msg').innerHTML = instruction ? "Computer move" : "Your move";

    // instruction = !instruction;
  });
});