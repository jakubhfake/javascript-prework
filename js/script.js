{
  const STONE = "kamień";
  const SCISSORS = "nożyczki";
  const PAPER = "papier";

  function playGame(playerInput) {
    clearMessages();
    function computerMove(argMoveId) {
      if (argMoveId == 1) {
        return "kamień";
      } else if (argMoveId == 2) {
        return "papier";
      } else if (argMoveId == 3) {
        return "nożyczki";
      }
      printMessage("Nie znam ruchu o id " + argMoveId + ".");
      return "nieznany ruch";
    }

    console.log("Rych gracza do wyświetlenia: " + playerInput);

    printMessage("Twój ruch to: " + playerInput);

    const argMoveId = Math.floor(Math.random() * 3 + 1),
      argComputerMove = computerMove(argMoveId),
      gameResult = displayResult(argComputerMove, playerInput);

    console.log("Wylosowana liczba to: " + argMoveId);

    console.log("Ruch Bota do wyświetlenia: " + argComputerMove);

    printMessage("Ruch Bota to: " + argComputerMove);

    printMessage("Bot zagrał " + argComputerMove + " a Ty " + playerInput);

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
    playGame("kamień");
  });
  document.getElementById("paper").addEventListener("click", function () {
    playGame("papier");
  });
  document.getElementById("scissors").addEventListener("click", function () {
    playGame("nożyczki");
  });
}
