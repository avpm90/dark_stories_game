const games = new Game();

const gameBoard = document.getElementById("gameBoard");
const question = document.getElementById("question");
const startBtn = document.getElementById("start");
const confirmBtn = document.getElementById("confirm");

startBtn.addEventListener("click", () => {
  printQuestions();
  startBtn.classList.add("hide");
});

confirmBtn.addEventListener("click", () => {});

function printQuestions() {
  question.innerText = games.darkStories[0].question;

  for (let i = 0; i < games.darkStories[0].options.length; i++) {
    const button = document.createElement("button");
    button.innerText = games.darkStories[0].options[i];
    gameBoard.appendChild(button);

    button.addEventListener("click", () => {
      const clickedBtn = event.target.innerText;
      console.log(clickedBtn);
      if (clickedBtn == games.darkStories[0].correctAnswer) {
        goToNext();
      }
    });
  }
}

//function goToNext() {}

//function getRightOption() {}
