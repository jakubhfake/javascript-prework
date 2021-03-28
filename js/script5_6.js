{
    const STONE = "kamień";
    const SCISSORS = "nożyczki";
    const PAPER = "papier";
  
    function playGame(playerInput) {
      clearMessages();
      function getMoveName(argMoveId) {
        if (argMoveId == 1) {
          return STONE;
        } else if (argMoveId == 2) {
          return PAPER;
        } else if (argMoveId == 3) {
          return SCISSORS;
        }
        printMessage("Nie znam ruchu o id " + argMoveId + ".");
        return "nieznany ruch";
      }
  
      console.log("Rych gracza do wyświetlenia: " + playerInput);
  
      printMessage("Twój ruch to: " + playerInput);
  
      let randomNumber = Math.floor(Math.random() * 3 + 1);
  
      console.log("Wylosowana liczba to: " + randomNumber);
  
      let argComputerMove = getMoveName(randomNumber);
      console.log("Ruch Bota do wyświetlenia: " + argComputerMove);
  
      printMessage("Ruch Bota to: " + argComputerMove);
  
      printMessage("Bot zagrał " + argComputerMove + " a Ty " + playerInput);
  
      let gameResult = displayResult(argComputerMove, playerInput);
      printMessage("Wynik gry to: " + gameResult);
  
      function displayResult(argComputerMove, playerInput) {
        if (argComputerMove == STONE && playerInput == PAPER) {
          return "wygrywasz Ty!";
        } else if (argComputerMove == PAPER && playerInput == SCISSORS) {
          return "Ty wygrywasz!";
        } else if (argComputerMove == SCISSORS && playerInput == STONE) {
          return "Ty wygrywasz!";
        } else if (argComputerMove == STONE && playerInput == SCISSORS) {
          return "wygrywa Bot!";
        } else if (argComputerMove == PAPER && playerInput == STONE) {
          return "wygrywa Bot!";
        } else if (argComputerMove == SCISSORS && playerInput == PAPER) {
          return "wygrywa Bot!";
        } else if (argComputerMove == playerInput) {
          return "mamy remis, graj dalej!!!";
        }
        printMessage("Graj dalej nieznany ruch gracza");
      }
    }
  
    document.getElementById("stone").addEventListener("click", function () {
      playGame(STONE);
    });
    document.getElementById("paper").addEventListener("click", function () {
      playGame(PAPER);
    });
    document.getElementById("scissors").addEventListener("click", function () {
      playGame(SCISSORS);
    });
  }
  