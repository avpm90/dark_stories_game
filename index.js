const games = new Game();

const gameBoard = document.getElementById("gameBoard");
const question = document.getElementById("question");
const startBtn = document.getElementById("start");
const confirmBtn = document.getElementById("confirm");
let currentElement = 0;
const allOptions = document.getElementsByClassName("options");

startBtn.addEventListener("click", () => {
  printQuestions(0);
  startBtn.classList.add("hide");
});

confirmBtn.addEventListener("click", () => {
  if (currentElement < games.darkStories.length) {
    currentElement++;
  }
  printQuestions(currentElement);
});

// for está colocando o eventlistener em todas as opções e quando clicados, chama checkQ com a opção clicada
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
  }
}

function checkQuestion(option) {
  if (option === games.darkStories[currentElement].correctAnswer) {
    console.log("acertou");
  } else {
    console.log("sefu");
  }
}
