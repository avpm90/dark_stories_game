const games = new Game();

const gameBoard = document.getElementById("gameBoard");
const question = document.getElementById("question");
const startBtn = document.getElementById("start");
const confirmBtn = document.getElementById("confirm");
const allOptions = document.getElementsByClassName("options");
const playAgain = document.getElementById("play2");
const game = document.getElementById("game");
const win = document.getElementById("win");
const lose = document.getElementById("lose");
let currentElement = 0;

//playAgain.addEventListener("click", () => {
// lose.setAttribute("class", "hide");
//  win.setAttribute("class", "hide");
//  question.setAttribute("class", "show");
//  game.setAttribute("class", "show");
//  });

startBtn.addEventListener("click", () => {
  printQuestions(0);
  startBtn.classList.add("hide");
  gameBoard.setAttribute("class", "show");
});

confirmBtn.addEventListener("click", () => {
  if (currentElement < games.darkStories.length) {
    currentElement++;
    gameBoard.setAttribute("class", "show");
    question.setAttribute("class", "show");
  } else {
    game.setAttribute("class", "hide");
    playAgain.setAttribute("class", "show");
    win.setAttribute("class", "show");
  }
  printQuestions(currentElement);
  confirmBtn.setAttribute("class", "hide");
});


for (let i = 0; i < allOptions.length; i++) {
  allOptions[i].addEventListener("click", (event) => {
    const clickedBtn = event.target.innerText;

    checkQuestion(clickedBtn);
  });
}
function printQuestions(currentElement) {
  question.innerText = games.darkStories[currentElement].question;

  for (let i = 0; i < games.darkStories[currentElement].options.length; i++) {
    allOptions[i].innerText = games.darkStories[currentElement].options[i];
  }}


function checkQuestion(option) {
  if (option === games.darkStories[currentElement].correctAnswer) {
    gameBoard.setAttribute("class", "hide");
    question.setAttribute("class", "hide"),
      confirmBtn.setAttribute("class", "show");
  } else {
    game.setAttribute("class", "hide");
    playAgain.setAttribute("class", "show");
    lose.setAttribute("class", "show");
  }}

