const games = new Game();

const gameBoard = document.getElementById("gameBoard");
const question = document.getElementById("question");
const startBtn = document.getElementById("start");
const confirmBtn = document.getElementById("confirm");

startBtn.addEventListener("click", () => {
  printQuestions(0);
  startBtn.classList.add("hide");
});

confirmBtn.addEventListener("click", () => {
  let currentElement = 0;
  if (currentElement < games.darkStories.length) {
    currentElement++;
  }
  printQuestions(currentElement);
});

function printQuestions(currentElement) {
  question.innerText = games.darkStories[currentElement].question;

  for (let i = 0; i < games.darkStories[currentElement].options.length; i++) {
    const button = document.createElement("button");
    button.innerText = games.darkStories[currentElement].options[i];
    gameBoard.appendChild(button);

    button.addEventListener("click", () => {
      const clickedBtn = event.target.innerText;
      console.log(clickedBtn);
    
    });
  }
}

//function goToNext() {}

//function getRightOption() {}



/* eu já tenho o botão
não quero que ele crie de novoo mesmo botão quando ele excute a segunda vez

criar um if
 */