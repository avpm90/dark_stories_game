const games = new Game();

const gameBoard = document.getElementById("gameBoard");
const question = document.getElementById("question");
const startBtn = document.getElementById("start");
const confirmBtn = document.getElementById("confirm");
const allOptions = document.getElementsByClassName("options");
const game = document.getElementById("game");
const win = document.getElementById("win");
const lose = document.getElementById("lose");  //elemento de html (tag)
let currentElement = 0;

startBtn.addEventListener("click", () => {
  printQuestions(0);
  startBtn.classList.add("hide");
});
confirmBtn.addEventListener("click", () => {
  if (currentElement < games.darkStories.length) {
    currentElement++; //continua na 24
  } else {
    game.setAttribute("class", "hide");
    win.setAttribute("class", "show");
  }              //(argumento)
  printQuestions(currentElement);
  confirmBtn.setAttribute("class", "hide");  // executa a proxima pergunta
});
//html collection com todos os botoes options capturados.
for (let i = 0; i < allOptions.length; i++) {
  allOptions[i].addEventListener("click", (event) => {
    const clickedBtn = event.target.innerText;

    checkQuestion(clickedBtn);
  });
}
                       //(paramentro)
function printQuestions(currentElement) {
  question.innerText = games.darkStories[currentElement].question;

  for (let i = 0; i < games.darkStories[currentElement].options.length; i++) {
    allOptions[i].innerText = games.darkStories[currentElement].options[i];
  }
}
                      //(parametro)
function checkQuestion(option) {
  if (option === games.darkStories[currentElement].correctAnswer) {
    confirmBtn.setAttribute("class", "show");
  } else {
    game.setAttribute("class", "hide");
    lose.setAttribute("class", "show");
  }
}
