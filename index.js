const games = new Game();

const gameBoard = document.getElementById("gameBoard");
const question = document.getElementById("question");
const startBtn = document.getElementById("start");
const confirmBtn = document.getElementById("confirm");

startBtn.addEventListener("click", () => {
  printQuestions(0);
  startBtn.classList.add("hide");
  // confirmBtn.classList.add("hide");
});

//function goToNext() {
confirmBtn.addEventListener("click", () => {
  let currentElement = 0;
  if (currentElement < games.darkStories.length) {
    currentElement++;
  }
  printQuestions(currentElement);
});

// console.log(printQuestions(currentElement))
//console.log(games.darkStories[currentElement].correctAnswer)

function printQuestions(currentElement) {
  question.innerText = games.darkStories[currentElement].question;
  // confirmBtn.classList.add("hide");
  // if (currentElement < games.darkStories.length) {
  // button.parentNode.removeChild(button)}
  //   gameBoard.classList.remove("allbtn");}
  //   const all = document.querySelectorAll(".allBtn");
  //all.forEach(allBtn => {
  //allBtn.remove();
  //})
  // }

  console.log(gameBoard);
  for (let i = 0; i < games.darkStories[currentElement].options.length; i++) {
    const button = document.createElement("button");

    button.innerText = games.darkStories[currentElement].options[i];

    gameBoard.appendChild(button);
    button.setAttribute("class", "allBtn");
    // console.log(button)

    button.addEventListener("click", () => {
      const clickedBtn = event.target.innerText;

      // if (clickedBtn === games.darkStories[currentElement].correctAnswer) {
      // goToNext()
      //   confirmBtn.classList.remove("hide");
      //    console.log(clickedBtn)
      // console.log(games.darkStories[currentElement].correctAnswer)
    });
  }
}
