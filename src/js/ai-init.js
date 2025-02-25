/**
 * This is an example of how to use the game with AI
 * used in ai-snake.html
 */

const urlParams = new URLSearchParams(window.location.search);
const horizontal = urlParams.get('horizontal');
const isHorizontal = horizontal === 'true' || horizontal === true;

const getGrid = () => {
  const grids = [[], [], []];

  /*
    Direction:
            0
          3   1
            2
 */

  if (isHorizontal) {
    grids[0] = [
      [2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
      [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0],
      [2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    ];
    grids[1] = [
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
      [0, 3, 3, 3, 3, 3, 3, 0, 0, 2, 3, 3, 3, 0, 0, 2, 3, 3, 3, 0, 0, 2, 3, 3, 3, 0, 2],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2],
      [0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 3, 3, 3, 0, 0, 0, 3, 3, 3, 0, 0, 0, 3, 3],
    ];
    grids[2] = [
      [2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
      [2, 0, 0, 0, 1, 1, 2, 0, 1, 1, 2, 0, 1, 1, 2, 0, 1, 1, 2, 0, 1, 1, 2, 0, 0, 0, 0],
      [1, 1, 2, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0],
      [0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0],
      [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0],
    ];
  } else {
    /*
      Direction:
              0
            3   1
              2
    */
    grids[0] = [
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
      [0, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
      [0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];
    grids[1] = [
      [1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
      [0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
      [0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
      [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
      [0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    ];
    grids[2] = [
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
      [0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
      [0, 0, 0, 3, 3, 3, 3, 3, 3, 0, 2, 3, 3, 0, 2],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 3, 3],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];
  }
  return grids;
}

const mySnakeBoard = new SNAKE.Board({
  boardContainer: "game-area",
  fullScreen: false,
  premoveOnPause: false,
  columns: isHorizontal ? 15 + 12 : 15,
  rows: isHorizontal ? 5 : 7,
  startRow: 2,
  startCol: 2,
  moveSnakeWithAI: ({
                      grid,
                      snakeHead,
                      currentDirection,
                      isFirstGameMove,
                      setDirection,
                    }) => {

    const route = parseInt(document.querySelector('input[name="ai-route"]:checked').value, 10);

    // This is NOT a real hamiltonian cycle. It misses some values, I'm just including this here as an example of
    // a look-up type table that you could do.
    const grids = getGrid();

    //console.log(JSON.parse(JSON.stringify(grid)))
    //console.log(snakeHead, currentDirection)

    const hamiltonianCycleGrid = grids[route];

    const newDirection = hamiltonianCycleGrid[snakeHead.row][snakeHead.col];
    setDirection(newDirection);
  },
  onLengthUpdate: (length) => {
    document.getElementById("snakeLength").innerHTML = `${length}`;
  },
  onPauseToggle: (isPaused) => {
    if (isPaused) {
      document.getElementById("message").innerHTML =
        "Press [space] to unpause.";
    } else {
      document.getElementById("message").innerHTML = "";
    }
  },
  onInit: (params) => {
    params.reloadGame();
    window.reloadGame = params.reloadGame;

    document.getElementById("speed").value = params.getSpeed();

    document.getElementById("speed").addEventListener("change", (evt) => {
      const speed = parseInt(evt.target.value, 10);
      params.setSpeed(speed);
    });
    document.getElementById("highScore").innerHTML =
      localStorage.getItem(HIGH_SCORE_KEY) || 0;

    params.startAIGame();
  },
  onWin: (params) => {
    document.getElementById("message").innerHTML =
      '<div>You win! :D</div> <button id="playAgain">Play again</button>';
    setTimeout(() => {
      document.getElementById("playAgain").addEventListener("click", () => {
        window.reloadGame();
        document.getElementById("game-area").focus();
        document.getElementById("message").innerHTML = "";
        params.startAIGame();
      });
      document.getElementById("highScore").innerHTML =
        localStorage.getItem(HIGH_SCORE_KEY) || 0;
    }, 100);
  },
  onDeath: (params) => {
    document.getElementById("message").innerHTML =
      '<div>You died :(</div> <button id="playAgain">Play again</button>';
    setTimeout(() => {
      document.getElementById("playAgain").addEventListener("click", () => {
        window.reloadGame();
        document.getElementById("game-area").focus();
        document.getElementById("message").innerHTML = "";
        params.startAIGame();
      });
      document.getElementById("playAgain").focus();
      document.getElementById("highScore").innerHTML =
        localStorage.getItem(HIGH_SCORE_KEY) || 0;
    }, 100);
  },
});
