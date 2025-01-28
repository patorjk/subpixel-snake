const mySnakeBoard = new SNAKE.Board({
  boardContainer: "game-area",
  fullScreen: false,
  premoveOnPause: false,
  columns: 15,
  rows: 7,
  startRow: 3,
  startCol: 3,
  onLengthUpdate: (length) => {
    document.getElementById('snakeLength').innerHTML = `${length}`;
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
    window.reloadGame = params.reloadGame;

    document.getElementById('speed').value = params.getSpeed();

    document.getElementById('speed').addEventListener('change', (evt) => {
      const speed = parseInt(evt.target.value, 10);
      params.setSpeed(speed);
    });
    document.getElementById('highScore').innerHTML = localStorage.getItem(HIGH_SCORE_KEY) || 0;

  },
  onWin: () => {
    document.getElementById('message').innerHTML = '<div>You win! :D</div> <button id="playAgain">Play again</button>';
    setTimeout(() => {
      document.getElementById('playAgain').addEventListener('click', () => {
        window.reloadGame();
        document.getElementById('game-area').focus();
        document.getElementById('message').innerHTML = '';
      });
      document.getElementById('highScore').innerHTML = localStorage.getItem(HIGH_SCORE_KEY) || 0;
    }, 100);
  },
  onDeath: () => {
    document.getElementById('message').innerHTML = '<div>You died :(</div> <button id="playAgain">Play again</button>';
    setTimeout(() => {
      document.getElementById('playAgain').addEventListener('click', () => {
        window.reloadGame();
        document.getElementById('game-area').focus();
        document.getElementById('message').innerHTML = '';
      });
      document.getElementById('playAgain').focus();
      document.getElementById('highScore').innerHTML = localStorage.getItem(HIGH_SCORE_KEY) || 0;
    }, 100);
  }
});
