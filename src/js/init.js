let reloadGame;

const mySnakeBoard = new SNAKE.Board({
  boardContainer: "game-area",
  fullScreen: false,
  premoveOnPause: false,
  columns: 15,
  rows: 15,
  onLengthUpdate: (length) => {
    console.log(length);
  },
  onPauseToggle: (isPaused) => {
    if (isPaused) {
      document.getElementById('message').innerHTML = 'Press [space] to unpause.';
    } else {
      document.getElementById('message').innerHTML = '';
    }
  },
  onInit: (params) => {
    params.reloadGame();
    reloadGame = params.reloadGame;
  },
  onWin: () => {
    document.getElementById('message').innerHTML = '<div>You win! :D</div> <button id="playAgain">Play again</button>';
    setTimeout(() => {
      document.getElementById('playAgain').addEventListener('click', () => {
        reloadGame();
        document.getElementById('game-area').focus();
        document.getElementById('message').innerHTML = '';
      })
    }, 100);
  },
  onDeath: () => {
    document.getElementById('message').innerHTML = '<div>You died :(</div> <button id="playAgain">Play again</button>';
    setTimeout(() => {
      document.getElementById('playAgain').addEventListener('click', () => {
        reloadGame();
        document.getElementById('game-area').focus();
        document.getElementById('message').innerHTML = '';
      })
    }, 100);
  }
});
