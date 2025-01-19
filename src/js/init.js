let reloadGame;

const mySnakeBoard = new SNAKE.Board({
  boardContainer: "game-area",
  fullScreen: false,
  premoveOnPause: false,
  columns: 15,
  rows: 15,
  startRow: 3,
  startCol: 3,
  onLengthUpdate: (length) => {
    document.getElementById('message').innerHTML = `Length: ${length}`;
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

    document.getElementById('speed').value = params.getSpeed();

    document.getElementById('speed').addEventListener('change', (evt) => {
      const speed = parseInt(evt.target.value, 10);
      params.setSpeed(speed);
    });

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
      });
      document.getElementById('playAgain').focus();
    }, 100);
  }
});
