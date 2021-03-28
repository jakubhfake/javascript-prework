{
  const STONE = "kamień";
  const SCISSORS = "nożyczki";
  const PAPER = "papier";

  function playGame(playerInput) {
    clearMessages();
    function getMoveName(argMoveId) {
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

    console.log("Gracz wybrał: " + playerInput);

    let argPlayerMove = getMoveName(playerInput);
    console.log("Rych gracza do wyświetlenia: " + argPlayerMove);

    printMessage("Twój ruch to: " + argPlayerMove);

    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log("Wylosowana liczba to: " + randomNumber);

    let argComputerMove = getMoveName(randomNumber);
    console.log("Ruch Bota do wyświetlenia: " + argComputerMove);

    printMessage("Ruch Bota to: " + argComputerMove);

    printMessage("Bot zagrał " + argComputerMove + " a Ty " + argPlayerMove);

    let wynikGry = displayResult(argComputerMove, argPlayerMove);
    printMessage("Wynik gry to: " + wynikGry);

    function displayResult(argComputerMove, argPlayerMove) {
      if (argComputerMove == STONE && argPlayerMove == PAPER) {
        return "wygrywasz Ty!";
      } else if (argComputerMove == PAPER && argPlayerMove == SCISSORS) {
        return "Ty wygrywasz!";
      } else if (argComputerMove == SCISSORS && argPlayerMove == STONE) {
        return "Ty wygrywasz!";
      } else if (argComputerMove == STONE && argPlayerMove == SCISSORS) {
        return "wygrywa Bot!";
      } else if (argComputerMove == PAPER && argPlayerMove == STONE) {
        return "wygrywa Bot!";
      } else if (argComputerMove == SCISSORS && argPlayerMove == PAPER) {
        return "wygrywa Bot!";
      } else if (argComputerMove == argPlayerMove) {
        return "mamy remis, graj dalej!!!";
      }
      printMessage("Graj dalej nieznany ruch gracza");
      /*return "nieznany ruch gracza";*/
    }
  }

  document.getElementById("stone").addEventListener("click", function () {
    playGame("1");
  });
  document.getElementById("paper").addEventListener("click", function () {
    playGame("2");
  });
  document.getElementById("scissors").addEventListener("click", function () {
    playGame("3");
  });
}
