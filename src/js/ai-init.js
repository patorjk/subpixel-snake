/**
 * This is an example of how to use the game with AI
 * used in ai-snake.html
 */

// Backward compatible function - this game needs to run on really old devices
function getSearchParams(url) {
  var params = {};
  var searchString = url.split('?')[1];

  if (searchString) {
    var pairs = searchString.split('&');
    for (var i = 0; i < pairs.length; i++) {
      var pair = pairs[i].split('=');
      var key = decodeURIComponent(pair[0]);
      var value = decodeURIComponent(pair[1] || '');

      if (params[key]) {
        if (Array.isArray(params[key])) {
          params[key].push(value);
        } else {
          params[key] = [params[key], value];
        }
      } else {
        params[key] = value;
      }
    }
  }
  return params;
}


var urlParams = getSearchParams(window.location.toString());
var horizontal = urlParams.horizontal || "";
var isHorizontal = horizontal === 'true' || horizontal === true;
var oldDevice = urlParams.oldDevice || "";
var isOldDevice = isOldDevice === 'true' || isOldDevice === true;

if (!window.localStorage) {
  window.localStorage = {};
  window.localStorage.setItem = function () {
  };
}

var getGrid = function () {
  var grids = [[], [], []];

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
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
    ];
    grids[1] = [
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
      [0, 3, 3, 3, 3, 3, 3, 0, 0, 2, 3, 3, 3, 0, 0, 2, 3, 3, 3, 0, 0, 2, 3, 3, 3, 0, 2],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2],
      [0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 3, 3, 3, 0, 0, 0, 3, 3, 3, 0, 0, 0, 3, 3]
    ];
    grids[2] = [
      [2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
      [2, 0, 0, 0, 1, 1, 2, 0, 1, 1, 2, 0, 1, 1, 2, 0, 1, 1, 2, 0, 1, 1, 2, 0, 0, 0, 0],
      [1, 1, 2, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0],
      [0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0],
      [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0]
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
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
    grids[1] = [
      [1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
      [0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
      [0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
      [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
      [0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
    ];
    grids[2] = [
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
      [0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
      [0, 0, 0, 3, 3, 3, 3, 3, 3, 0, 2, 3, 3, 0, 2],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 3, 3],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
  }
  return grids;
}

var mySnakeBoard = new SNAKE.Board({
  boardContainer: "game-area",
  fullScreen: false,
  premoveOnPause: false,
  columns: isHorizontal ? 15 + 12 : 15,
  rows: isHorizontal ? 5 : 7,
  startRow: 2,
  startCol: 2,
  oldDevice: isOldDevice, // Forces full redraw of snake using sRGB/sBGR colors - for browsers / devices that don't support mixed-blend-mode
  moveSnakeWithAI: function (params) {

    var grid = params.grid,
      snakeHead = params.snakeHead,
      currentDirection = params.currentDirection,
      isFirstGameMove = params.isFirstGameMove,
      setDirection = params.setDirection;

    var route1 = document.getElementById('ai-route1').checked;
    var route2 = document.getElementById('ai-route2').checked;
    var route3 = document.getElementById('ai-route3').checked;

    //const route = parseInt(document.querySelector('input[name="ai-route"]:checked').value, 10);
    var route = 0;
    if (route1) {
      route = 0;
    } else if (route2) {
      route = 1;
    } else if (route3) {
      route = 2;
    }

    // This is NOT a real hamiltonian cycle. It misses some values, I'm just including this here as an example of
    // a look-up type table that you could do.
    var grids = getGrid();

    //console.log(JSON.parse(JSON.stringify(grid)))
    //console.log(snakeHead, currentDirection)

    var hamiltonianCycleGrid = grids[route];

    var newDirection = hamiltonianCycleGrid[snakeHead.row][snakeHead.col];
    setDirection(newDirection);
  },
  onLengthUpdate: function (length) {
    document.getElementById("snakeLength").innerHTML = '' + length;
  },
  onPauseToggle: function (isPaused) {
    if (isPaused) {
      document.getElementById("message").innerHTML =
        "Press [space] to unpause.";
    } else {
      document.getElementById("message").innerHTML = "";
    }
  },
  onInit: function (params) {
    params.reloadGame();
    window.reloadGame = params.reloadGame;

    document.getElementById("speed").value = params.getSpeed();

    SNAKE.addEventListener(document.getElementById("speed"), "change", function (evt) {
      var speed = parseInt(evt.target.value, 10);
      params.setSpeed(speed);
    });

    //var highScoreKey = window.localStorage.getItem(HIGH_SCORE_KEY);
    //document.getElementById("highScore").innerHTML = highScoreKey || 0;

    params.startAIGame();
  },
  onWin: function (params) {
    document.getElementById("message").innerHTML =
      '<div>You win! :D</div> <button id="playAgain">Play again</button>';
    setTimeout(function () {
      document.getElementById("playAgain").addEventListener("click", function () {
        window.reloadGame();
        document.getElementById("game-area").focus();
        document.getElementById("message").innerHTML = "";
        params.startAIGame();
      });
      //document.getElementById("highScore").innerHTML = window.localStorage.getItem(HIGH_SCORE_KEY) || 0;
    }, 100);
  },
  onDeath: function (params) {
    document.getElementById("message").innerHTML =
      '<div>You died :(</div> <button id="playAgain">Play again</button>';
    setTimeout(function () {
      SNAKE.addEventListener(document.getElementById("playAgain"), "click", function () {
        window.reloadGame();
        document.getElementById("game-area").focus();
        document.getElementById("message").innerHTML = "";
        params.startAIGame();
      });
      document.getElementById("playAgain").focus();
      //document.getElementById("highScore").innerHTML = window.localStorage.getItem(HIGH_SCORE_KEY) || 0;
    }, 100);
  }
});
