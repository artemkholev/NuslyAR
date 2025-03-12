import { renderCharacter } from "../../../entities/artem/index.js";

export function renderMain() {
  const section = document.createElement("main");
  section.innerHTML = `
    <div style="position: absolute; right: 100px;" class="game-container">
      <h3>Catch the Ball!</h3>
      <p>Score: <span id="score">0</span></p>
      <p>Time left: <span id="timer">10</span>min</p> 
    </div>
    <h2>About myself</h2>
    <div id="ball"></div>
  `;
  section.appendChild(renderCharacter());

  const ball = section.querySelector("#ball");
  const scoreDisplay = section.querySelector("#score");
  const timerDisplay = section.querySelector("#timer");
  let score = 0;
  let timeLeft = 10;
  let gameInterval;
  let moveInterval;

  function moveBall() {
    const x = Math.random() * (window.innerWidth - 50);
    const y = Math.random() * (window.innerHeight - 50);
    ball.style.left = `${x}px`;
    ball.style.top = `${y}px`;
  }

  function startGame() {
    score = 0;
    timeLeft = 10;
    scoreDisplay.textContent = score;
    timerDisplay.textContent = timeLeft;

    moveInterval = setInterval(moveBall, 500);

    gameInterval = setInterval(() => {
      timeLeft--;
      timerDisplay.textContent = timeLeft;

      if (timeLeft <= 0) {
        clearInterval(gameInterval);
        clearInterval(moveInterval);
        alert(`Game over! Your score is ${score}.`);
      }
    }, 60000);
  }

  ball.addEventListener("click", () => {
    score++;
    scoreDisplay.textContent = score;
    moveBall();
  });

  startGame();

  return section;
}
