import "./index.css";
const modal = document.querySelector(".modal");
const btn = document.querySelector(".rules-btn");
const span = document.querySelector(".close");
const buttonEl = document.querySelectorAll(".circle");
const winner = document.querySelector(".display-winner");
const reset = document.querySelector(".reset");
const computerPoints = document.querySelector(".computer-points");
const playerPoints = document.querySelector(".player-points");

let playerCount = 0;
let computerCount = 0;

btn.addEventListener("click", () => {
  modal.style.display = "block";
});

span.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

buttonEl.forEach((button) => {
  button.addEventListener("click", () => {
    winner.style.display = "block";
    let userChoice = button.value;
    const options = ["Rock", "Paper", "Scissor", "Lizard", "Spock"];
    const computerChoice = options[Math.floor(Math.random() * options.length)];
    if (computerChoice === userChoice) {
      winner.textContent = `Tie`;
    } else if (
      (userChoice === "rock" && computerChoice === "Lizard") ||
      (userChoice === "rock" && computerChoice === "Scissor") ||
      (userChoice === "paper" && computerChoice === "Rock") ||
      (userChoice === "paper" && computerChoice === "Spock") ||
      (userChoice === "scissor" && computerChoice === "Paper") ||
      (userChoice === "scissor" && computerChoice === "Lizard") ||
      (userChoice === "lizard" && computerChoice === "Paper") ||
      (userChoice === "lizard" && computerChoice === "Spock") ||
      (userChoice === "spock" && computerChoice === "Scissor") ||
      (userChoice === "spock" && computerChoice === "Rock")
    ) {
      winner.textContent = `Computer played : ${computerChoice}, Player Wins`;
      playerCount += 1;
      playerPoints.value = playerCount;
    } else {
      winner.textContent = `Computer Wins`;
      computerCount += 1;
      computerPoints.value = computerCount;
    }
  });
});

reset.addEventListener("click", () => {
  computerPoints.value = "";
  playerPoints.value = "";
  winner.style.display = "none";
  playerCount = 0;
  computerCount = 0;
});
