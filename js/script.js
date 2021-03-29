{
  const STONE = "kamień";
  const PAPER = "papier";
  const SCISSORS = "nożyczki";
  document.getElementById("stone").addEventListener("click", function () {
    playGame(STONE);
  });
  document.getElementById("paper").addEventListener("click", function () {
    playGame(PAPER);
  });
  document.getElementById("scissors").addEventListener("click", function () {
    playGame(SCISSORS);
  });

  const playGame = function (playerInput) {
    clearMessages();
    const argMoveId = Math.floor(Math.random() * 3 + 1);

    const computerMove = function (argMoveId) {
      if (argMoveId == 1) {
        return STONE;
      } else if (argMoveId == 2) {
        return PAPER;
      } else if (argMoveId == 3) {
        return SCISSORS;
      }
      printMessage("Nie znam ruchu o id " + argMoveId + ".");
      return "nieznany ruch";
    };

    const argComputerMove = computerMove(argMoveId);

    console.log("Rych gracza do wyświetlenia: " + playerInput);
    printMessage("Twój ruch to: " + playerInput);
    console.log("Wylosowana liczba to: " + argMoveId);
    console.log("Ruch Bota do wyświetlenia: " + argComputerMove);
    printMessage("Ruch Bota to: " + argComputerMove);
    printMessage("Bot zagrał " + argComputerMove + " a Ty " + playerInput);

    const displayResult = function (argComputerMove, playerInput) {
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
    };
    const gameResult = displayResult(argComputerMove, playerInput);
    printMessage("Wynik gry to: " + gameResult);
  };
}
